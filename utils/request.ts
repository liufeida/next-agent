import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/contants";
import { message } from "antd";
import axios, {
  AxiosHeaders,
  type AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

const DEFAULT_TIMEOUT = 10000;

// 刷新状态标记 & 请求队列
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}> = [];

const processQueue = (error: unknown | null, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token!);
    }
  });
  failedQueue = [];
};

// 调用刷新接口（使用原生 axios 避免循环拦截）
const doRefresh = async () => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    throw new Error("No refresh token");
  }

  const response = await axios.post<{
    code?: number;
    message?: string;
    success?: boolean;
    data?: { access_token: string; refresh_token?: string };
  }>(`${process.env.NEXT_PUBLIC_API_BASE_URL ?? ""}/users/refresh`, null, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  if (!response.data?.data?.access_token) {
    throw new Error("Refresh failed");
  }

  return response.data.data;
};

// export const ACCESS_TOKEN_KEY = "access_token";

export interface RequestConfig<D = unknown> extends AxiosRequestConfig<D> {
  skipAuth?: boolean;
  _retry?: boolean;
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
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError<RequestErrorData>) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & RequestConfig;
    const status = error.response?.status;

    // 401 且不是刷新请求，尝试无感刷新
    if (status === 401 && originalRequest && !originalRequest._retry) {
      if (isRefreshing) {
        // 正在刷新，将请求加入队列
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token: string) => {
              originalRequest.headers["Authorization"] = `Bearer ${token}`;
              resolve(axiosInstance(originalRequest));
            },
            reject: (err: unknown) => {
              reject(err);
            },
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const data = await doRefresh();
        const newAccessToken = data.access_token;

        // 更新 tokens
        setAccessToken(newAccessToken);
        if (data.refresh_token) {
          setRefreshToken(data.refresh_token);
        }

        // 处理队列中的请求
        processQueue(null, newAccessToken);

        // 重试原请求
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // 刷新失败，清除 token 并跳转登录
        processQueue(refreshError, null);
        clearAccessToken();
        clearRefreshToken();
        // return;
        message.error("登录已过期，请重新登录");
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    // 非 401 或其他错误
    const data = error.response?.data;
    const msg = data?.message ?? data?.msg ?? error.message ?? "Request failed";
    if (status !== 401) {
      message.error(msg);
    }
    return Promise.reject(new RequestError(msg, { status, data }));
  },
);

const getAccessToken = () => {
  if (typeof window === "undefined") {
    return "";
  }

  return window.localStorage.getItem(ACCESS_TOKEN_KEY) ?? "";
};

const getRefreshToken = () => {
  if (typeof window === "undefined") {
    return "";
  }

  return window.localStorage.getItem(REFRESH_TOKEN_KEY) ?? "";
};

export const setAccessToken = (token: string) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const setRefreshToken = (token: string) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(REFRESH_TOKEN_KEY, token);
};

export const clearAccessToken = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(ACCESS_TOKEN_KEY);
};

export const clearRefreshToken = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(REFRESH_TOKEN_KEY);
};

export const request = <T = unknown, D = unknown>(config: RequestConfig<D>) => axiosInstance.request<T, T, D>(config);

export { axiosInstance };
