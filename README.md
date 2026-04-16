This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash

# 启动命令
pnpm dev

```

```格式化配置
https://www.prettier.cn/

# prettier
1.不想format的code，用prettier-ignore在代码上方注释
2.prettier --cache --write src

```

## nextjs 版本升级

| 15.3.2 -> 16.2.4

```bash
# 使用 pnpm
pnpm dlx @next/codemod@canary upgrade latest

# 使用 npm
npx @next/codemod@canary upgrade latest

# 使用 yarn
yarn dlx @next/codemod@canary upgrade latest

# 使用 bun
bunx @next/codemod@canary upgrade latest

rm -rf .next
pnpm build
pnpm dev
```
