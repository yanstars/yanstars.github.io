---
title: SERVICE WORKER
date: 2020 04 06
categories:
    - stroage

tags:
    - web
updated: 2020 04 04
---

### service workers

-   app.js
-   sw.js
-   chrome://net-internals/#events
-   chrome://inspect/#service-workers

#### 一般来说，如果看到 provisional headers are shown 这个提示，说明这个请求并没有发送出去。

-   请求被某些扩展如 Adblock 拦截了，请求被浏览器插件拦截。解决方案：用 chrome://net-internals 来帮助你查找被屏蔽的请求以及可能的原因。（本人发现现在这个用不了了）
-   请求被墙了
-   走本地缓存或者 dataurl 的请求。强缓存 from disk cache 或者 from memory cache，此时也不会显示
-   服务器出错或者超时，没有真正的返回。client 发送请求后，由于各种原因，比如网络延迟，server 端逻辑错误，导致 client 端长时间未收到响应。解决方案：改正占用很长时间的 server 端程序。
-   跨域，请求被浏览器拦截
-   其他原因

#### img crossorigin

这个属性有两个值可选,需要 server 端在 response 的 header 中带上 Access-Control-Allow-Credentials 属性。

-   anonymous：如果使用这个值的话就会在请求中的 header 中的带上 Origin 属性，但请求不会带上 cookie 和其他的一些认证信息。
-   use-credentials：这个就同时会在跨域请求中带上 cookie 和其他的一些认证信息。

#### cache-control

-   max-age>0 时 直接从游览器缓存中 提取
-   max-age<=0 时 向 server 发送 http 请求确认 ,该资源是否有修改 有的话 返回 200 ,无的话 返回 304.
