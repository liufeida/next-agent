import { ACCESS_TOKEN_KEY } from "@/contants";
import axios, {
  AxiosHeaders,
  type AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

const DEFAULT_TIMEOUT = 10000;

// export const ACCESS_TOKEN_KEY = "access_token";

export interface RequestConfig<D = unknown> extends AxiosRequestConfig<D> {
  skipAuth?: boolean;
}

export interface RequestErrorData {
  code?: number | string;
  message?: string;
  msg?: string;
  [key: string]: unknown;
}

export class RequestError<T = unknown> extends Error {
  status?: number;
  data?: T;

  constructor(message: string, options?: { status?: number; data?: T }) {
    super(message);
    this.name = "RequestError";
    this.status = options?.status;
    this.data = options?.data;
  }
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?? "",
  timeout: DEFAULT_TIMEOUT,
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig & RequestConfig) => {
  const headers = AxiosHeaders.from(config.headers);
  const isFormData = typeof FormData !== "undefined" && config.data instanceof FormData;
  const token = getAccessToken();

  headers.set("Accept", "application/json");

  if (!headers.has("Content-Type") && config.data && !isFormData) {
    headers.set("Content-Type", "application/json");
  }

  if (token && !config.skipAuth) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  config.headers = headers;

  return config;
});
/**
 * AxiosResponse<{
  success,
  msg,
  data: { access_token }
}>
 */
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.warn("Response:", response);
    return response;
  },
  (error: AxiosError<RequestErrorData>) => {
    const status = error.response?.status;
    const data = error.response?.data;
    const message = data?.message ?? data?.msg ?? error.message ?? "Request failed";
    if (status === 401) {
      clearAccessToken();
    }

    return Promise.reject(new RequestError(message, { status, data }));
  },
);

const getAccessToken = () => {
  if (typeof window === "undefined") {
    return "";
  }

  return window.localStorage.getItem(ACCESS_TOKEN_KEY) ?? "";
};

export const setAccessToken = (token: string) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const clearAccessToken = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(ACCESS_TOKEN_KEY);
};

export const request = <T = unknown, D = unknown>(config: RequestConfig<D>) => axiosInstance.request<T, T, D>(config);

export { axiosInstance };
