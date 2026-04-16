# hey-api 响应类型与运行时返回不一致问题说明

## 问题现象

在登录页调用 `login()` 时：

- 运行时可以通过 `res.data.access_token` 拿到值
- 但 TypeScript 类型提示却要求写 `res.data.data.access_token`

这看起来像是“实际数据只有一层 `data`，类型却多了一层 `data`”。

## 根因

这个问题不是 hey-api 生成错了，而是：

1. 后端接口本身返回的是统一包裹结构 `ResponseModel<T>`
2. hey-api 根据 OpenAPI 生成的类型，也会按这个结构生成
3. hey-api 的 axios client 默认返回的是 `AxiosResponse<T>`
4. 项目里的自定义 `axios` 响应拦截器又做了：

```ts
return response.data;
```

这会把 `AxiosResponse` 外层的 `data` 提前拆掉。

## 两层 `data` 分别是什么

如果后端返回：

```json
{
  "code": 0,
  "message": "ok",
  "success": true,
  "data": {
    "access_token": "xxx"
  }
}
```

那么在不同返回方式下会出现两种结构。

### 情况 1：返回 `response`

```ts
res = AxiosResponse<ResponseModel<LoginResult>>
```

此时需要写：

```ts
res.data.data.access_token
```

解释：

- 第一层 `res.data` 是 AxiosResponse 自带的响应体字段
- 第二层 `res.data.data` 是后端 `ResponseModel<T>` 里的业务数据字段

### 情况 2：返回 `response.data`

```ts
res = ResponseModel<LoginResult>
```

此时需要写：

```ts
res.data.access_token
```

解释：

- Axios 那层 `data` 被拦截器提前拆掉了
- 但后端自己的 `data` 还在

## 为什么会出现 TS 报错，但运行时能取到值

因为：

- 运行时返回值被拦截器改成了 `response.data`
- 但 hey-api 生成类型时，仍然按 OpenAPI + AxiosResponse 的原始结构推导

也就是说：

- 运行时结构变了
- 生成类型没变

所以会出现：

- 运行时：`res.data.access_token` 能拿到值
- 类型系统：仍提示 `res.data.data.access_token`

## 这是不是后端写错了

不一定。

### 后端没错的情况

如果后端实际返回的确实是：

```json
{
  "code": 0,
  "message": "ok",
  "success": true,
  "data": {
    "access_token": "xxx"
  }
}
```

那么后端和 OpenAPI 都是正确的。问题出在前端把运行时返回结构改了，但类型没有同步改。

### 后端有问题的情况

如果后端实际返回的是扁平结构：

```json
{
  "access_token": "xxx"
}
```

但 OpenAPI 却声明成 `ResponseModel<T>`，那就是后端实现和接口文档不一致。

## 为什么 umi/max 的 openapi 插件看起来不用拆

因为那套通常不会把完整 `AxiosResponse` 暴露给业务层。

很多情况下，`request()` 直接返回的是“响应体 body”，不是 `AxiosResponse`，所以业务层只会看到：

```ts
{
  success,
  msg,
  data,
}
```

于是自然写成：

```ts
res.data.access_token
```

这不是没有拆包，而是拆包位置不同。

## 为什么很多项目没有额外 wrapper

通常是因为它们已经在别处做了这件事，例如：

1. 请求库本身直接返回 body
2. 手写 request/service 时统一 `return response.data`
3. service 层再继续统一 `return response.data.data`

本质上都还是有一层“封装”。

## 本项目推荐做法

为了避免每次重新运行 `openapi-ts` 后手改生成文件失效，推荐：

1. `src/services/fastapi` 保持为纯生成结果，不手改
2. 给 hey-api 单独使用不拆包的 axios 实例
3. 在生成目录外增加稳定 wrapper，例如 `src/services/api.ts`
4. 页面和业务代码统一从 `@/services` 导入封装后的接口

这样可以同时满足：

- 重新生成接口不会覆盖手工修复
- 业务层依然可以使用更简洁的访问方式
- 生成层与业务层职责清晰

## 一句话总结

本问题的本质是：

> 前端运行时通过拦截器改掉了返回结构，但 hey-api 生成类型仍按原始 OpenAPI 结构推导，导致“运行时能用、TS 提示不一致”。
