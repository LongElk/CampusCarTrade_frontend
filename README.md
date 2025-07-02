# CampusCarTrade 前端项目

本项目为校园二手车交易平台的前端部分，基于 Vue 3 + Vite + Element Plus 开发。

## 环境要求

- Node.js 16+
- Yarn 或 npm

## 安装依赖

```sh
yarn
# 或
npm install
```

## 本地开发启动

```sh
yarn dev
# 或
npm run dev
```

## 生产环境打包

```sh
yarn build
# 或
npm run build
```

## 代码检查

```sh
yarn lint
# 或
npm run lint
```

## 主要功能

- 用户登录、退出
- 车辆列表浏览、筛选、分页
- 车辆详情查看、下单
- 车辆发布、图片上传
- 订单管理（买家/卖家视角，删除订单）

## 使用说明

1. 启动后端服务并确保 API 地址与 `src/api/base.ts` 中的 `baseURL` 保持一致。
2. 启动前端服务后，访问 [http://localhost:5173](http://localhost:5173)（默认端口）。
3. 注册/登录后可体验全部功能。

如需更多帮助，请联系项目维护者。
