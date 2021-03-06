---
title: ECMAScript 更新
date: 2020 04 10
categories:
  - js

tags:
  - web
  - js
---

### ES5

- 新特性
  - 严格模式"use strict"
  - String.trim()
  - Array.isArray()
  - Array.forEach()
  - Array.map()
  - Array.filter()
  - Array.reduce()
  - Array.reduceRight()
  - Array.every()
  - Array.some()
  - Array.indexOf()
  - Array.lastIndexOf()
  - JSON.parse()
  - JSON.stringify()
  - Date.now()
  - 对象属性 Getter 和 Setter
- 语法更改
  - 对字符串的属性访问 [ ]
  - 数组和对象字面量中的尾随逗号
  - 多行字符串字面量
  - 作为属性名称的保留字

### ES6

- 变量的解构赋值
- 字符串的扩展
- 字符串的新增方法
- 正则的扩展
- 数值的扩展
- 函数的扩展
- 数组的扩展
- 对象的扩展
- 对象的新增方法
- Symbol
- Set 和 Map 数据结构
- Proxy
- Reflect
- Promise 对象
- Iterator 和 for...of 循环
- Generator 函数的语法
- Generator 函数的异步应用
- async 函数
- Class 的基本语法
- Class 的继承
- Module 的语法
- Module 的加载实现
- 编程风格
- 读懂规格
- 异步遍历器
- ArrayBuffer

### ES7

- 指数运算符(幂): \*\*
- Array.prototype.includes(value , firstIndex) : 判断数组中是否包含指定 value

### ES8

- 字符串填充（padStart 和 padEnd）
- Object.values // 当把数字当做对象的键的时候，返回的数组以键的值升序排序
- Object.entries
- Object.getOwnPropertyDescriptors()
- 函数参数列表和调用中的尾随逗号
- Async Functions (异步函数)
- 共享内存 和 Atomics

### ES9

- 对象的 Rest(结构)/Spread(扩展)
- for await of 异步迭代
- Promise.prototype.finally()
- 正则 (lookahead) 先行断言/(lookbehind) 反向断言
- 正则表达式 Unicode 转义\p{...}和\P{...}
- 正则表达式命名捕获组（groups）
- 正则表达式 dotAll 模式 /s

### ES10

- 新特性
  - Array.prototype.{flat,flatMap}：用来打平数组
  - Object.fromEntries??Object.entries 的逆运算
  - String.prototype.{trimStart,trimEnd}：规范化字符串 trim 方法（广泛实现的非规范版本叫 String.prototype.trimLeft/trimRight）
  - Symbol.prototype.description：返回 Symbol 的描述信息
- 语法修改
  - Optional catch binding：允许省略 try-catch 结构中 catch 块的参数部分
  - Array.prototype.sort：要求排序算法必须是稳定的（相等元素排序前后顺序不变）
  - Well-formed JSON.stringify：要求 JSON.stringify 返回格式良好的 UTF-8 字符串
  - JSON superset：字符串字面量中允许出现 U+2028(LINE SEPARATOR)和 U+2029(PARAGRAPH SEPARATOR)
  - Function.prototype.toString revision：要求返回 function 源码文本，或标准占位符,注释

### ES11

- \# 私有变量
- Promise.allSettled 解决 promiese.all 中一个 reject 的缺陷
- ?? 空值合并运算符 (解决合法假值 '' , 0 )
- ?. 可选链运算符
- BigInt
- dynamic-import 动态引入
- globalThis // window || self || global

### chromeV8

- 垃圾回收

  - 短期内存空间
    - 方法: 新生代/老生代替换
    - 结果 多次存活并交换的对象，存入常用内存空间
  - 常用内存空间
    - 方法: 分片 + 增量标记清除 毫秒级别

- 工作原理

  - parse 解析器 -> 成 AST 语法树
  - interpreter 解释 -> 字节码 (可直接执行，出现一次) 执行后清除 AST 内存空间
  - 根据字节码优化 编译成 -> 机器码(可直接执行,出现多次的热点函数，优化并记录。)

  ```js
  function add(x, y) {
    return x + y
  }

  add(1, 5) //字节码执行
  add(1, 6) // 优化记录函数并优化成机器码（速度更快，消耗更少）
  add(5, 6) // 优化后的机器码执行
  add('hello', 'Tom') //  回退 变成字节码执行   体现出TS的优势
  ```

### Important

- WeakSet 只能储存对象， WeakMap 键名只能是对象
- js 代码预解析，等号右边不解析,对比 import(静态加载)
- 隐式转换会调用 valueOf 和 toString 方法

### 参考

- [2020](https://blog.csdn.net/duyujian706709149/article/details/104014127)
- [ES10(2019)](http://www.ayqy.net/blog/es2019/)
- [ES9 (2018)](https://www.html.cn/archives/9990)
- [ES8 (2017)](https://www.html.cn/archives/9981)
- [ES7 (2016)](https://www.jianshu.com/p/df0d1fd010bb)
- [ES6 (2015)](https://es6.ruanyifeng.com/#docs/arraybuffer)
- [ES5 (2014)](https://www.w3school.com.cn/js/js_es5.asp)
