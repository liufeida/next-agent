"use client";

import { themeMap } from "@/theme/antd-theme";
import { ConfigProvider } from "antd";
import { FC, ReactNode, useEffect } from "react";
import { useAppSettingsStore } from "@/stores";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const { theme } = useAppSettingsStore();

  // 同步主题到 HTML data 属性
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const currentTheme = themeMap[theme] || themeMap.default;

  return <ConfigProvider theme={currentTheme}>{children}</ConfigProvider>;
};
