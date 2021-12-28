---
title: 企业微信三方应用开发与调试
date: 2021 08 22
tags:
  - js-sdk
  - 企业微信
---

### 企业微信三方应用-通讯录组件的开发和调试

#### 背景

> 因为企业微信限制，在第三方应用中无法直接获通讯录明文，只能通过企业微信提供的通讯录组件才能展示通讯录信息，但是通讯录组件存在几个使用条件

| 通讯录提供的 api      | 条件             | 功能                                   |
| --------------------- | ---------------- | -------------------------------------- |
| `<ww-oepn-data>`      | 可信域名         | dom 元素展示静态的信息                 |
| `WWopenData.prefetch` | 可信域名 + https | 根据 id 获取加密信息 ，用于 cavas 渲染 |

- 企业微信后台能验证通过的可信域名 , 即一个 txt 文件必须在网站的根目录，并且能被访问
- 域名必须经过备案
- wx.config 的`ready`时间后进行 ` wx.agentConfig` ，同时`wx.agentConfig的success`事件后才会挂载 `WWopenData`
- WWopenData.prefetch 必须在 https 的协议下才能工作，否则报错 'xxx is undefined'

#### 通讯录组使用流程

- html 文件中在线链接引入 js-sdk ，wx-sdk
- 在需要使用 通讯录组件的页面 注册 `wx.config` 和`wx.agentConfig` (看文档)，如果是 spa，需要路由改变时再次进行注册(ios)

- id 改变后重新执行 `WWopenData.bind`

#### 常规开发过程

- `wx.config` 先于 `wx.agentConfig`
- WWopenData 挂载时机
- `WWopenData.bind`的时机
- `WWopenData.prefetch` 参数类型
- 环境差异兼容

**种种问题只能打包测试环境之后才能暴露出来，真机上难以调试，造成了修改-打包-发布-debug-修改的死循环**

---

#### 需求

- 即时编辑代码 + 代码热更新
- https 服务应用
- 根目录.txt 校验文件检测
- 备案域名

#### js-sdk 的本地使用方案

> js-sdk 一般来说需要 wx.config 给对应的 api 授权
> 可能会需要在一个可信域名下进行 `wx.config`或者 `wx.agentConfig`
> 那么怎么快速简单的在本地的开发服务进行域名 refer 验证呢？

#### 两种方案

- 内网穿透本地服务
- 本地 host 域名劫持

##### 内网穿透

> 提供公网访问本地服务的能力

- 花生壳
- frp
- 哲西云
- ...

##### 本地 host 域名劫持

- 修改主机的 hosts 文件，将可信域名 dns 到本地 , 修改记录` 127.0.0.1 www.test.com`，这样主机访问`www.test.com`时就会访问本地的 localhos:80 服务
- 使用 nginx 或者 caddy 反向代理工具，将本地 80 端口的请求转发到项目的开发服务器上
- 浏览器 `www.test.com`访问项目

#### code-server 方案 环境配置

- 公网的服务器
- 已经备案的域名
- vite
- code-server

#### 步骤 举个 🌰 `tax200.com`

1. 服务器安装 [code-server](https://coder.com/docs/code-server/latest)

```shell
# centos
curl -fOL https://github.com/cdr/code-server/releases/download/v$VERSION/code-server-$VERSION-amd64.rpm
sudo rpm -i code-server-$VERSION-amd64.rpm
```

2. cd 到项目目录 命令行执行 ,启动的 web 服务就是云端编辑器，开发地址 http://tax200.com:8080

```shell
code-server .
# Now visit http://127.0.0.1:8080.
```

> 需要配置一下链接密码 配置文件在 ~/.config/code-server/config.yaml

3. vite 配置 https 开发服务器功能 , 项目地址 https://tax200.com:8888

```js
// .vite.config.js
server:  {
    https:{
      // 对应域名的证书文件
      key: fs.readFileSync('/usr/site/2_www.test.site.key'),
      cert: fs.readFileSync('/usr/site/1_www.test.site_bundle.crt')
    },
}
//  https://127.0.0.1:8888.

```

4. 项目的`public`目录下放入企业微信管理后台的验证文件 `example.txt`

> 保证 https://tax200.com:8888/example.txt能够直接拿到 `example.txt` 文件

> 现在能在 http://tax200.com:8080 上修改源代码
> 同时在 https://tax200.com:8888 上调试项目了
> 最后还是 build 部署到目标服务器上，这里只提供了一种在开发调试过程中提高效率的方案

## 2021-12 更新

之前采用的是 `code-server` + `测试服务器` 直接远程服务器 dev 加 debug 的模式 , 存在部分弊端

- 修改之后的代码不能在 测试服务器 push 只能 cv 到本地提交
- code-server 体验不太好，由于网关拦截，经常弹错误提示框，还增加了一个依赖维护项，属实麻烦

### 内网穿透 方案

#### 开发流程的简单模型

- A ：具有域名 `test.com` 和 ssl 的公网机器
- L ：本地开发机器

> 在 A L 之间建立 frp 隧道

- A

```
# frps.ini

 [common]
 bind_port = 7000
 vhost_http_port = 443
```

- L

```
# frpc.ini

[common]
server_addr = xxx.xxx.xxx.xxx
server_port = 7000

[web]
type = http
local_ip = 127.0.0.1
local_port = 3000
custom_domains = test.com

[unix_domain_socket]
type = tcp
local_ip = 127.0.0.1
remote_port = 3000
local_port = 3000
custom_domains = test.com
```

#### 步骤

> frp 隧道做了两件事
> 转发 test.com 的 http 请求到 local:3000 端口 用于应用服务
> 转发 ws://test.com:3000 的 ws 消息到 localhost:3000 上 用于 vite 热更新代码

- A 主机开放 7000 端口, 配置 frps.ini 并启动服务端程序
- L 本地 配置 frpc.ini 并启动客户端程序
- 本地 启动 3000 端口的 vite 开发服务
- 现在就可以在本地愉快的 debug 线上服务 test.com 了

#### 可能存在的问题

- frpc 客户端会产生 error 日志 但是对 web 服务没影响
- dev 在企业微信安卓上 起不来 (vite dev 没降级，内置浏览器不支持某些 api, mac pc 上 ok 的)
- 企业微信安卓路由跳转之后白屏 ( 刷新页面 ，原因不详,可能是 1 引发的，资源加载失败)
