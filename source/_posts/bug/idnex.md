---
title: 踩坑系列
date: 2019 11 27
tags:
    - bug
categories: bug
updated: 2020 04 05
---

#### JS

-   switch case 下没有独立作用域
-   class 构造函数内不要`return` 一个引用类型，会覆盖`new`后的结果

#### 微信小程序

-   csv 导入云端数据库时 number 类型发生改变为 string, 字段类型不能控制
-   微信开发工具 input 框 ,字体大小会闪烁

#### CSS

-   elementUI 拖拽组件在 mac safri 浏览器下完成拖拽后自动产生 hover 效果
-   weex 下 `<image>`标签的缩放问题,查看属性

#### GIT

-   `git checkout . == rm -rf *`
-   `git submodule init`
-   `git submodule update`
-   git 设置 http/https 代理后,取消代理设置, git clone 任然走代理端口导致 clone 失败(未解决) -- 卸载重装
-   git clone 时编码错误 (未解决)-- 卸载重装
    `git clone failed Failed to convert “” to ACE; could not convert string to UTF-8`

#### VUE

-   v-for 最好嵌套在父节点内部
-   v-for 内 key 最好绑定唯一键值而不是 index ,vue 存在自己缓存的机制,数组改变后剩下元素的 index 不变时，默认未发生变化！
-   `props`监听 使用 `computed` 属性转换监听对象
-   dom 异步更新 `this.$nextTick(()=>{})`

#### DEV

-   安装依赖包死活出现问题：
    -   检查 node 版本！
    -   检查全局包工具版本！
-   出现本地和线上差异时：
    -   检查线上 babel 和 loader 和本地是否对应！(`for... of...` )
    -   (class 作用域) 避免 css 选择器进行 dom 操作和进入逻辑结构
-   `&&` 后的代码报错问题 例 `A=FALSE ;` `A && B` `B`处代码报错

-   Es6 属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串 `[object Object]`
-   [keyA] 和 [keyB] 得到的都是`[object Object]`，所以 [keyB] 会把 [keyA] 覆盖掉，而 obj 最后只有一个
    `[object Object]` 属性。
