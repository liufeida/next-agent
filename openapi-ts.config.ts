// openapi-ts.config.ts
import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "https://fastapi.agentcore.art/api/openapi.json", // 你的 OpenAPI 规范文件地址
  output: "src/services/fastapi", // 生成的代码存放的目录
  plugins: [{ name: "@hey-api/client-axios", runtimeConfigPath: "../hey-api.js" }], // 生成 API 方法和类型定义
});
