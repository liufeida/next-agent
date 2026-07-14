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

const wrapMethod = <T extends AsyncMethod>(method: T) => {
  return (async (...args: Parameters<T>) => {
    const response = await method(...args);
    return unwrapResponse(response);
  }) as (
    ...args: Parameters<T>
  ) => Promise<UnwrapEnvelope<Awaited<ReturnType<T>> extends { data: infer D } ? D : Awaited<ReturnType<T>>>>;
};

type ApiModule = Record<string, unknown>;

const api = Object.fromEntries(
  Object.entries(fastapi as ApiModule)
    .filter(([, value]) => typeof value === "function")
    .map(([key, value]) => [key, wrapMethod(value as AsyncMethod)]),
) as {
  [K in keyof typeof fastapi]: (typeof fastapi)[K] extends AsyncMethod
    ? ReturnType<typeof wrapMethod<(typeof fastapi)[K]>>
    : (typeof fastapi)[K];
};

export default api;

export type * from "./fastapi";
export { client } from "./fastapi/client.gen";
