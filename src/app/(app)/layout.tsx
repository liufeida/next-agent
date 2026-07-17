/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import turtleImage from "@/assets/images/logo.png";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useAppSettingsStore, useAuthStore, useLogout } from "@/stores";
import { LogoutOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { App, Avatar, Dropdown, Layout, Menu, theme } from "antd";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const { Header, Sider, Content } = Layout;
export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { message } = App.useApp();
  const router = useRouter();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const { theme: currentTheme } = useAppSettingsStore();
  const {
    token: { colorBgContainer, borderRadiusLG, colorBorder, colorText, colorSplit },
  } = theme.useToken();
  const logoutMutation = useLogout();
  const userInfo = useAuthStore((state) => state.userInfo);

  const dropdownItems = [
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "退出登录",
      onClick: async () => {
        try {
          await logoutMutation.mutateAsync();
          router.replace("/login");
        } catch {
          message.error("退出失败，请重试");
        }
      },
    },
  ];

  return (
    <ThemeProvider>
      <Layout className='flex h-screen flex-col'>
        <Header
          className='flex h-14 items-center justify-between px-0'
          style={{
            background: colorBgContainer,
            borderBottom: `1px solid ${colorSplit}`,
          }}
        >
          <div className='flex cursor-pointer items-center gap-3 pl-1' onClick={() => setCollapsed(!collapsed)}>
            <Image
              src={turtleImage}
              alt='Logo'
              width={32}
              height={32}
              className='h-8 w-auto'
              priority
              loading='eager'
            />
            <span className='text-lg font-semibold' style={{ color: colorText }}>
              老巨头
            </span>
          </div>
          <div className='flex items-center gap-4 pr-4'>
            <ThemeSwitcher />
            <Dropdown menu={{ items: dropdownItems }} trigger={["click"]} placement='bottomRight'>
              <Avatar size='large' icon={<UserOutlined />} src={userInfo?.avatar_url} className='cursor-pointer' />
            </Dropdown>
          </div>
        </Header>
        <Layout className='flex flex-1 overflow-hidden'>
          <Sider
            theme={currentTheme === "dark" ? "dark" : "light"}
            trigger={null}
            collapsible
            collapsed={collapsed}
            className='overflow-auto'
            style={{ borderRight: `1px solid ${colorSplit}` }}
          >
            <Menu
              theme={currentTheme === "dark" ? "dark" : "light"}
              mode='inline'
              tooltip={false}
              defaultSelectedKeys={[pathname]}
              items={[
                {
                  key: "/home",
                  icon: <UserOutlined />,
                  label: "首页",
                  onClick: () => router.push("/home"),
                },
                {
                  key: "/user-manage",
                  icon: <VideoCameraOutlined />,
                  label: "用户管理",
                  onClick: () => router.push("/user-manage"),
                },
              ]}
            />
          </Sider>
          <Content className='m-2.5 overflow-auto rounded-lg p-6' style={{ background: colorBgContainer }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </ThemeProvider>
  );
}
