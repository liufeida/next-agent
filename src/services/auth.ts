export interface LoginParams {
  username: string;
  password: string;
  // remember?: boolean;
}

export interface LoginResult {
  token: string;
  refreshToken?: string;
  username?: string;
  [key: string]: unknown;
}

// export const login = (data: LoginParams, config?: RequestConfig<LoginParams>) => {
//   const formData = new FormData();
//   formData.append("username", data.username);
//   formData.append("password", data.password);

//   return post<LoginResult, LoginParams>("/api/auth/login", formData as any, {
//     ...config,
//     skipAuth: true,
//     headers: {
//       // 不要手动设置 Content-Type，让浏览器自动设置为 multipart/form-data; boundary=...
//       ...(config?.headers || {}),
//     },
//   });
// };

export const authService = {
  // login,
};
