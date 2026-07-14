import * as fastapi from "./fastapi";

type ApiEnvelope<T> = {
  code?: number;
  message?: string;
  success?: boolean;
  data?: T | null;
};

type UnwrapEnvelope<T> = T extends ApiEnvelope<infer U> ? ApiEnvelope<U> : T;

type AsyncMethod = (...args: never[]) => Promise<unknown>;

const isApiEnvelope = (value: unknown): value is ApiEnvelope<unknown> => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const payload = value as Record<string, unknown>;

  return "data" in payload && ("code" in payload || "message" in payload || "success" in payload);
};

const unwrapResponse = <T>(response: T): UnwrapEnvelope<T extends { data: infer D } ? D : T> => {
  if (!response || typeof response !== "object" || !("data" in response)) {
    return response as UnwrapEnvelope<T extends { data: infer D } ? D : T>;
  }

  const payload = response.data;
  if (!isApiEnvelope(payload)) {
    return payload as UnwrapEnvelope<T extends { data: infer D } ? D : T>;
  }

  return {
    data: payload.data ?? null,
    code: payload.code ?? null,
    message: payload.message ?? null,
    success: payload.success ?? null,
  } as UnwrapEnvelope<T extends { data: infer D } ? D : T>;
};

// 请求去重缓存
const pendingRequests = new Map<string, Promise<unknown>>();

const generateKey = (methodName: string, args: unknown[]): string => {
  try {
    return `${methodName}::${JSON.stringify(args)}`;
  } catch {
    return `${methodName}::${Date.now()}`;
  }
};

type WrappedMethod<T extends AsyncMethod> = (
  ...args: Parameters<T>
) => Promise<UnwrapEnvelope<Awaited<ReturnType<T>> extends { data: infer D } ? D : Awaited<ReturnType<T>>>>;

const wrapMethod = <T extends AsyncMethod>(methodName: string, method: T): WrappedMethod<T> => {
  return (async (...args: Parameters<T>) => {
    const key = generateKey(methodName, args);

    // 如果有正在进行的相同请求，直接返回
    if (pendingRequests.has(key)) {
      return pendingRequests.get(key) as Promise<
        UnwrapEnvelope<Awaited<ReturnType<T>> extends { data: infer D } ? D : Awaited<ReturnType<T>>>
      >;
    }

    const promise = (async () => {
      const response = await method(...args);
      pendingRequests.delete(key);
      return unwrapResponse(response);
    })();

    pendingRequests.set(key, promise);

    return promise;
  }) as WrappedMethod<T>;
};

type ApiModule = Record<string, unknown>;

type ApiType = {
  [K in keyof typeof fastapi]: (typeof fastapi)[K] extends AsyncMethod
    ? WrappedMethod<(typeof fastapi)[K]>
    : (typeof fastapi)[K];
};

const api = Object.fromEntries(
  Object.entries(fastapi as ApiModule)
    .filter(([, value]) => typeof value === "function")
    .map(([key, value]) => [key, wrapMethod(key, value as AsyncMethod)]),
) as ApiType;

export default api;

export type * from "./fastapi";
export { client } from "./fastapi/client.gen";
