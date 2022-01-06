---
title: Nginx
date: 2021 12 30
tags: network server
---

### Nginx

- web 服务器
- 反向代理

### Install

- **建议下载源码自行构建**
- centos `docker pull nginx `
- mac `brew install nginx`

### Command

- `nginx -t` 检查配置文件
- `nginx -s reload`
- `nginx -s stop`
- `nginx -s quit`

### Third module

- `fancyindex` 文件服务目录
- `brotil` brotil 压缩和 gzip 一样需要配置 文件类型

> 下载 modelue 源码 并 增加模块编译参数
> docker nginx image 和 brew 安装的 nginx 不太好处理

### DO

- gizp
- brotil
- proxy
- vue-router-history
- cache

### 🐛

- 在多层代理转发过程中 `content-encoding: gzip` 压缩头丢失 , 配置文件中修改为`gzip_http_version : 1.0`

- 文件服务器中,注意文件的访问权限， 否则 `403`
- 保证`gzip_types` `gzip_min_length` 和预期一致
