"use client";

import { themeOptions } from "@/theme/antd-theme";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { FC, useEffect } from "react";
import { useAppSettingsStore } from "@/stores";

export const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useAppSettingsStore();

  // 同步主题到 HTML data 属性
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const items = themeOptions.map(option => ({
    key: option.key,
    label: option.label,
    icon: (
      <span
        style={{
          display: "inline-block",
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: option.color,
          marginRight: 8,
        }}
      />
    ),
    onClick: () => setTheme(option.key as "default" | "dark" | "purple"),
  }));

  const currentTheme = themeOptions.find(t => t.key === theme);

  return (
    <Dropdown menu={{ items, selectedKeys: [theme] }} placement="bottomRight">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
          padding: "4px 12px",
          borderRadius: 6,
          transition: "background 0.2s",
        }}
        className="theme-switcher"
        onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.04)")}
        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
      >
        <span
          style={{
            display: "inline-block",
            width: 14,
            height: 14,
            borderRadius: "50%",
            backgroundColor: currentTheme?.color,
            border: "2px solid rgba(255,255,255,0.3)",
          }}
        />
        <span style={{ fontSize: 14 }}>{currentTheme?.label}</span>
        <DownOutlined style={{ fontSize: 12, opacity: 0.6 }} />
      </div>
    </Dropdown>
  );
};
