---
title: REACT NATIVE
date: 2020 05 01
categories:
    - js

tags:
    - android
    - js
    - react
---

#### 文档 [https://reactnative.cn/](https://reactnative.cn/)

-   环境搭建
    -   node 12.\*
    -   python 2.\*
    -   android studio
    -   jdk 1.8
    -   npm 设置淘宝镜像
    -   java, python,android sdk 环境变量配置
    -   翻墙 或者 配置 android studio 代理
    -   其余看文档！很重要！
-   运行 android 项目

    ```bash

    cd AwesomeProject
    yarn android
    # 或者
    yarn react-native run-android
    # 或者
    npm run android
    ```

-   node 进程窗口中调试

    -   `R R` reload app
    -   `摇手机` 或者 `ctrl + M` 打开调试菜单

#### 相关

-   默认 flex 布局
    -   flex-direction : column
-   四种事件外嵌组件
-   flatList
    -   默认有懒加载
-   image
    -   require() 引入本地
    -   uri() 链接网络资源
-   react-navigation
    -   局部样式 替换 全局样式对象
    -   TabNaviggator Tab 导航
    -   StackNavigator 页面跳转
    -   DrawerNavigator 抽屉侧滑
    -   深层嵌套组件内 用 navigator hook 获取 navigation 对象
        -   navigation.push() 推入历史记录栈
        -   navigation.navigate() 同上，但多次推入自身，自会记录一次
        -   navigation.goBack() 返回
-   mobx/ redux
-   单位适配(width,fontSize)
-   fetch 封装(不存在跨域问题,注意本地开发时，用本机网络地址)
