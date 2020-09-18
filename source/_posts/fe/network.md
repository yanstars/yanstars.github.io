---
title: 网络方面的记录
date: 2020 08  20
categories:
    - web
    - network

tags:
    - network
---

### 主要

-   tcp

    -   http
    -   https
    -   websocket

-   udp
-   ajax
-   fetch
-   跨域问题

#### http

-   Hypertext Transfer Protocol
-   三次握手
-   四次挥手

#### https

-   Hypertext Transfer Protocol Secure
-   `http` + `ssl` + 证书
-   对称加密 + 非对称加密

#### ajax

-   `XMLHttpRequest`
-   针对超时请求提前终止 ， `xhr.abort()`
-   状态回调 `xhr.onStateChange`
-   上传进度回调 `xhr.upload.onprogress`

#### fetch

-   默认不带 `cookie`
-   返回的数据需要 `json` 序列化
-   只有网络或者服务器错误才触发 `reject`
-   mode
    -   `same-origin` 不允许
    -   `cors` 支持 同域请求不需要后端 cors 支持
    -   `no-cors` 用于跨域但服务器不带 cors 响应头

#### GET / POST

-   POST 数据格式为 `json` 时，会发送 `option` 请求，查看服务器情况，再发送真正的 POST 请求 (`firefox` 只发送一次)
-   GET 存在 `2048` 字节的长度限制,浏览器和服务器限制
-   GET 编码只能时 `url` 编码
