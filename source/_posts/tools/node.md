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

-   `npm i -g pm2`
    `pm2 start app.js`

#### 事件循环

1 外部输入数据
2 轮询阶段(poll)
3 检查阶段(check)
4 关闭事件回调阶段(close callback)
5 定时器检测阶段(timer)
6 I/O 事件回调阶段(I/O callbacks)
7 闲置阶段(idle, prepare)
8 轮询阶段（按照该顺序反复运行）…

#### 各个阶段

-   timers 阶段：这个阶段执行 timer（setTimeout、setInterval）的回调
-   I/O callbacks 阶段：处理一些上一轮循环中的少数未执行的 I/O 回调
-   idle, prepare 阶段：仅 node 内部使用
-   poll 阶段：获取新的 I/O 事件, 适当的条件下 node 将阻塞在这里
-   check 阶段：执行 setImmediate() 的回调
-   close callbacks 阶段：执行 socket 的 close 事件回调

#### 对比浏览器

-   浏览器和 Node 环境下，microtask 任务队列的执行时机不同
-   Node 端，microtask 在事件循环的各个阶段之间执行
-   浏览器端，microtask 在事件循环的 macrotask 执行完之后执行

-   当每个阶段完成后，如果存在 nextTick 队列，就会清空队列中的所有回调函数，并且优先于其他 microtask 执行
-   process.nextTick 和 Promise 的回调函数，追加在本轮循环，即同步任务一旦执行完成，就开始执行它们。而 setTimeout、setInterval、setImmediate 的回调函数，追加在次轮循环。
-   [链接](https://blog.csdn.net/Fundebug/article/details/86487117)

#### 传递参数

-   基本类型 传递的参数赋值给函数的局部变量
-   引用类型 复制地址 局部变量的变化会反映到函数外部
