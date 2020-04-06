---
title: NODEJS
date: 2020 03 27
tags:
    - js
    - node
categories: node
updated: 2020 04 05
---

### NODE

#### 特点

-   异步 I/O
-   事件回调
-   跨平台
-   单线程(js 执行线程,I/O,网络单独线程)

-   Node.js 是单进程单线程[针对 js 执行引擎]应用程序，但是因为 V8 引擎提供的异步执行回调接口，通过这些接口可以处理大量的并发，所以性能非常高。
-   Node.js 几乎每一个 API 都是支持回调函数的。
-   Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。
-   Node.js 单线程类似进入一个 while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.

#### 自动重启工具

-   `npm -g install supervisor`
    `supervisor app.js`

-   `npm i -g nodemon`
    `nodemon app.js`
