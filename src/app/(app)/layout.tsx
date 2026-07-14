/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/contants";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, Menu, theme } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const { Header, Sider, Content } = Layout;
export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [pathname, setPathname] = useState(typeof window !== "undefined" ? window.location.pathname : "");
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const dropdownItems = [
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "退出登录",
      onClick: () => {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        router.replace("/login");
      },
    },
  ];

  const siderStyle: React.CSSProperties = {
    overflow: "auto",
    // height: "100vh",
    position: "sticky",
    insetInlineStart: 0,
    top: 0,
    scrollbarWidth: "thin",
    scrollbarGutter: "stable",
  };

  return (
    <Layout>
      <Header
        className='box-border flex items-center justify-between border-b border-[#e9e9e9]'
        style={{ padding: 0, background: colorBgContainer }}
      >
        <div></div>
        <div className='pr-4'>
          <Dropdown menu={{ items: dropdownItems }} trigger={["click"]} placement='bottomRight'>
            <Avatar
              size='large'
              icon={<UserOutlined />}
              src='https://fastapi.agentcore.art/api/uploads/20260417/185d081fe03262b8ee964bc7c986f0b5_988ae7a310a84676853f9d91223017dd.png'
              className='cursor-pointer'
            />
          </Dropdown>
        </div>
      </Header>
      <Layout hasSider>
        <Sider theme='light' trigger={null} collapsible collapsed={collapsed} style={siderStyle}>
          <div className='sticky bottom-[-0.5px] border-t border-gray-200 bg-gray-100 text-center'>
            <Button
              className='h-[42px] w-full'
              block
              type='text'
              size='large'
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
          </div>
          <Menu
            theme='light'
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
        <Content
          style={{
            margin: "10px 8px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: "auto",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
