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

export const login = wrapMethod(fastapi.login);
export const ollamaHealthCheck = wrapMethod(fastapi.ollamaHealthCheck);
export const ollamaChat = wrapMethod(fastapi.ollamaChat);
export const ollamaChatStream = wrapMethod(fastapi.ollamaChatStream);
export const refresh = wrapMethod(fastapi.refresh);
export const getCurrentUser = wrapMethod(fastapi.getCurrentUser);
export const getUserById = wrapMethod(fastapi.getUserById);
export const postUsersList = wrapMethod(fastapi.postUsersList);
export const postCreateUser = wrapMethod(fastapi.postCreateUser);
export const deleteUserById = wrapMethod(fastapi.deleteUserById);
export const updateUserInfos = wrapMethod(fastapi.updateUserInfos);
export const previewFile = wrapMethod(fastapi.previewFile);
export const downloadFile = wrapMethod(fastapi.downloadFile);
export const uploadFile = wrapMethod(fastapi.uploadFile);
export const uploadFiles = wrapMethod(fastapi.uploadFiles);
export const fileList = wrapMethod(fastapi.fileList);
export const getFileById = wrapMethod(fastapi.getFileById);

export type * from "./fastapi";
export { client } from "./fastapi/client.gen";
