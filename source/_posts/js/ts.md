---
title: JS
date: 2020 04
categories:
  - js

tags:
  - web
  - js
  - ts
---

### ts js 的超集

- 静态类型，即编译阶段进行类型检查
- 通过编译器，增强 js 语法能力
- 与 ECMAScript 同步发展。

### Ts 语法 基础

```js
// 类型注解
let var1: string

// 类型推论
const var2 = true
// var2 = 'sss'

// 原始类型： string number boolean undefined null symbol void ...
let var3: string | number

// 类型数组
let arr: string[]

// 元组
let x: [string, number]
x = ['Runoob', 1] // 运行正常
x = [1, 'Runoob'] // 报错
console.log(x[0]) // 输出 Runoob

// 任意类型
let varAny: any

// 枚举
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Blue
console.log(c) // 输出 2

// never
let x: never
let y: number
x = 123 // 运行错误，数字类型不能转为 never 类型
x = (() => {
  throw new Error('exception')
})() // 运行正确，never 类型可以赋值给 never类型
y = (() => {
  throw new Error('exception')
})() // 运行正确，never 类型可以赋值给 数字类型
function error(message: string): never {
  // 返回值为 never 的函数可以是抛出异常的情况
  throw new Error(message)
}
function loop(): never {
  // 返回值为 never 的函数可以是无法被执行到的终止点的情况
  while (true) {}
}

// 函数类型约束, string参数类型， number返回类型
function greet(person: string): number {
  return 233
}

// void类型(没有返回值)
function warn(): void {
  const a = 0
}

// 对象object, 不是原始类型就是对象类型
function fn1(o: object) {
  //
}

// 正确的姿势
function fn2(o: { props: number }) {
  // 传入的参数必须有props属性
}

// 类型别名type，自定义类型
type Prop = { props: number }
function fn3(o: Prop) { }// 等同于fn2

// type 和interface的区别, 基本上完全相同

// 类型断言 短暂欺骗编译校验
const someValue: any = 'this is a string'
const strLen = (someValue as string).length

// 联合类型
let union: string | number
union = '1'
union = 1

// 交叉类型 主要作用是拓展类型
type First = { first: number }
type Second = { second: number }
// 拓展新的type
type FirstAndSecond = First & Second
function fn4(param: FirstAndSecond): FirstAndSecond {
  return { first: 1, second: 2 } // fisrt 和second 必须都有
}

// 函数
/**
 * 1. 设置了参数就是必填参数
 * 2. 默认值
 * 3. 可选参数，位置一般是放在参数的最后
 */
function greeting(person: string, msg = 'abc', msg2?: string): string {
  return ''
}

// 函数重载 和java类似： 场景主要是源码和框架，函数用参数的类型、个数、返回值的类型来区分同名的函数
// 先声明，在实现
// 同名的声明可以有多个
function watch(cb1: () => void): void
function watch(cb1: () => void, cb2: (v1: any, v2: any) => void): void
// 实现
function watch(cb1: () => void, cb2?: (v1: any, v2: any) => void) {
  if (cb1 && cb2) {
    // 执行重载2
  } else {
    // 执行重载1
  }
}

// class
class Parent {
  private _foo = 'foo' // 私有属性，不能在类的外部访问
  protected bar = 'bar' // 保护属性，可以在子类中访问
  // 参数属性:构造函数参数加修饰符，能够定义为成员属性
  constructor(public tua = 'tua') {}
  // 方法也有修饰符
  // private someMethod() { }
  // 存取器:属性方式访问，可添加额外逻辑，控制读写性
  get foo() {
    return this._foo
  }
  set foo(val) {
    this._foo = val
  }
}
class Child extends Parent {}
const p = new Parent()
const c = new Child()

// 接口仅约束结构，不要求实现，使用更简单
interface Person {
  firstName: string
  lastName: string
}
// greeting函数通过Person接口约束参数解构
function greeting1(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName
}
greeting1({ firstName: 'Jane', lastName: 'User' }) // 正确
// greeting1({firstName: 'Jane'}); // 错误

// 泛型
// 不用泛型
// interface Result {
// ok:0|1;
//   data: Feature[];
// }

// 使用泛型
interface Result<T> {
  ok: 0 | 1
  data: T
}
// 泛型方法
function getResult<T>(data: T): Result<T> {
  return { ok: 1, data }
}
// 用尖括号方式指定T为string
getResult<string>('hello')
// 用类型推断指定T为number
getResult(1)

//  命名空间  模块    ///指令
// IShape.ts
namespace Drawing {
  export interface IShape {
    draw()
  }
}

/// <reference path = "IShape.ts" />
namespace Drawing {
  export class Circle implements IShape {
    public draw() {
      console.log('Circle is drawn')
    }
  }
}

// 定义模块
// IShape.ts
module Module_Name {
  export interface StringValidator {
    //声明接口对外部可以使用
    isAcceptable(s: string): boolean
  }
} //定义模块

// 导入模块
import shape = require('./IShape')
// 声明文件以 .d.ts 为后缀，例如：
runoob.d.ts
// 声明文件或模块的语法格式如下：
declare module Module_Name {}
// TypeScript 引入声明文件语法格式：
/// <reference path = " runoob.d.ts" />
```
