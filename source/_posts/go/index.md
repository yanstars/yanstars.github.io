---
title: GO
date: 2021 04
tags:
  - GO
categories: GO
---

### 关于特性缺失

- 为了简化设计，不支持函数重载和操作符重载
- 为了避免在 C/C++ 开发中的一些 Bug 和混乱，不支持隐式转换
- Go 语言通过另一种途径实现面向对象设计来放弃类和类型的继承
- 尽管在接口的使用方面可以实现类似变体类型的功能，但本身不支持变体类型
- 不支持动态加载代码
- 不支持动态链接库
- 不支持泛型
- 通过 recover 和 panic 来替代异常机制
- 不支持静态变量

### Remark

- 声明的变量必须使用 ，否则编译报错 ， 常量则不会
- 一组申明的常量中，如果某个没用赋值，则默认和上一行一致
- 名称大写默认导出(public) , 小写本文件使用(private)
- 简写申明只能在函数内使用

### 关键词

```go
type             // 申明类型
fallthrough      // 穿透下一个switch
goto             // 跳转到制定语句块
go               // 开启新的协程
nil              // 空值
iota             // 编译器自动累加 直到遇到新的 const 申明
defer            // 函数返回前执行 栈结构
_                // 垃圾桶，舍弃不想要的值
select           // 选择通道
make             // 创建复杂类型 返回指针,使用.时自动展开
```

### 数据类型

- 基本
  - string
  - byte
  - bool
  - int
  - uint
  - float
  - complex64
- 其他
  - slice
  - strut
  - array
  - interface{}
  - chan
  - map
  - time.Time

### 资料链接

- [《The Way to Go》中文译本，中文正式名《Go 入门指南》](https://github.com/unknwon/the-way-to-go_ZH_CN)
- [gobyexample](https://github.com/mmcgrana/gobyexample)
- [GO playground](https://github.com/x1unix/go-playground)
- [build-web-application-with-golang](https://github.com/astaxie/build-web-application-with-golang)
- [Go 语言高级编程](https://github.com/chai2010/advanced-go-programming-book)
