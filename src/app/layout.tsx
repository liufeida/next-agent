/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/theme/globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export const metadata: Metadata = {
  title: "My Blog",
  description: "Blog for Mr.Liu",
  icons: {
    icon: "/icon.svg",
  },
};

const roboto = Roboto({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={roboto.className}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
