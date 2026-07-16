/* eslint-disable @next/next/no-page-custom-font */
import { ReactQueryProvider } from "@/stores";
import { themeConfig } from "@/theme/antd-theme";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App, ConfigProvider } from "antd";
import type { Metadata } from "next";
import "../theme/globals.css";

export const metadata: Metadata = {
  title: "My Blog",
  description: "Blog for Mr.Liu",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link href='https://fonts.googleapis.com/css2?family=Inter@400;500;700&display=swap' rel='stylesheet' />
      </head>
      <body>
        <ReactQueryProvider>
          <AntdRegistry>
            <App>
              <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>
            </App>
          </AntdRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
