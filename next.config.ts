/** @type {import('next').NextConfig} */
const nextConfig = {
  // next/image 的优化功能依赖 nodejs 服务端，如果使用了 output: "export"，需要将 images.unoptimized 设置为 true 来禁用优化功能，否则图片将无法加载
  output: "export", // 纯静态导出模式，不支持 next start;想要 start，就注释这段代码
  distDir: "dist",
  allowedDevOrigins: ["web.agentcore.art"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https", // 你的图片 URL 使用的协议
        hostname: "fastapi.agentcore.art", // 你的图片服务器域名
        port: "", // 如果使用了非标准端口，如 :3000，则在此填写
        pathname: "/**", // 允许访问该域名下的所有路径，你也可以写得更具体，例如 '/api/uploads/**'
      },
    ],
  },
};

module.exports = nextConfig;
