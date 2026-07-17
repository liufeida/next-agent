import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AppSettingsState {
  language: string;
  theme:
    | "default"
    | "dark"
    | "purple"
    | "orange"
    | "gold"
    | "cyan"
    | "magenta"
    | "geekblue"
    | "volcano"
    | "red"
    | "yellow"
    | "blue";
  collapsed: boolean;

  setLanguage: (language: string) => void;
  setTheme: (
    theme:
      | "default"
      | "dark"
      | "purple"
      | "orange"
      | "gold"
      | "cyan"
      | "magenta"
      | "geekblue"
      | "volcano"
      | "red"
      | "yellow"
      | "blue",
  ) => void;
  toggleCollapsed: () => void;
  setCollapsed: (collapsed: boolean) => void;
}

export const useAppSettingsStore = create<AppSettingsState>()(
  devtools(
    persist(
      (set) => ({
        language: "zh-CN",
        theme: "default",
        collapsed: false,

        setLanguage: (language) => set({ language }),
        setTheme: (theme) => set({ theme }),
        toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
        setCollapsed: (collapsed) => set({ collapsed }),
      }),
      {
        name: "app-settings-storage",
        partialize: (state) => ({
          language: state.language,
          theme: state.theme,
          collapsed: state.collapsed,
        }),
      },
    ),
    { name: "AppSettingsStore" },
  ),
);
