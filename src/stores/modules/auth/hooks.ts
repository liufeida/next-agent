import type { LoginModel, UsersLoginReo } from "@/services/fastapi";
import { login } from "@/services/fastapi";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "./store";

export function useLogin() {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: async (data: LoginModel): Promise<UsersLoginReo> => {
      const res = await login({ body: data });
      const loginInfo = res?.data?.data;
      if (!loginInfo) {
        throw new Error("Login failed");
      }
      return loginInfo;
    },
    onSuccess: (data) => {
      setAuth(data);
    },
  });
}

export function useLogout() {
  const logout = useAuthStore((state) => state.logout);

  return useMutation({
    mutationFn: async () => {
      logout();
    },
  });
}
