import type { UsersLoginReo } from "@/services/fastapi";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  userInfo: UsersLoginReo | null;
  isAuthenticated: boolean;

  setAuth: (data: UsersLoginReo) => void;
  logout: () => void;
  updateToken: (accessToken: string) => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set, get) => ({
        accessToken: null,
        refreshToken: null,
        userInfo: null,
        isAuthenticated: false,

        setAuth: (data) => {
          set({
            accessToken: data.access_token || null,
            refreshToken: data.refresh_token || null,
            userInfo: data,
            isAuthenticated: true,
          });
        },

        logout: () => {
          set({
            accessToken: null,
            refreshToken: null,
            userInfo: null,
            isAuthenticated: false,
          });
          // 清除 localStorage
          localStorage.removeItem("auth-storage");
        },

        updateToken: (accessToken) => {
          set({ accessToken, isAuthenticated: true });
        },
      }),
      {
        name: "auth-storage",
        partialize: (state) => ({
          accessToken: state.accessToken,
          refreshToken: state.refreshToken,
          userInfo: state.userInfo,
          isAuthenticated: state.isAuthenticated,
        }),
      },
    ),
    { name: "AuthStore" },
  ),
);
