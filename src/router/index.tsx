"use client";
// 1. 引入,建议使用hash路由，hash无兼容性，浏览器路由可能需要配置
import App from "@/app/page";
import Login from "@/pages/login";
import { createHashRouter, RouterProvider } from "react-router-dom";

// 2. 创建路由实例
const router = createHashRouter(
  [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <App />,
      children: [],
    },
  ],
  { basename: "route" },
);

const RouterProviderRoot = ({}) => {
  return <RouterProvider router={router} />;
};

export default RouterProviderRoot;
