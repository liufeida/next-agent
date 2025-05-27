/* eslint-disable @next/next/no-page-custom-font */
import "@/theme/globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "My Blog",
  description: "Blog for Mr.Liu",
  icons: {
    icon: "/icon.svg",
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const roboto = Roboto({
  subsets: ["latin"],
});

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
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
