---
title: VUE相关
date: 2020 04 10
categories:
    - js

tags:
    - web
    - js
    - vue
---

---

### vue

-   数据劫持
-   发布 订阅
-   监听器 Observe ：劫持 并监听所有属性，如果有变动的，就通知订阅者
-   消息订阅器 Dep ：收集订阅者，链接 监听器 Observer 和订阅者 Watcher
-   解析器 Compile: 扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器
-   订阅者 Watcher : 收到属性的变化通知并执行相应的函数，从而更新视图

### 组件传值

-   v-bind / prop
-   eventBus Vue.prototype.bus = new Vue() / this.bus.$on | this.bus.$emit
-   provide / inject
-   this.$refs.child / this.$parent
-   vuex
-   localstroage
-   vm.$attrs和vm.$listeners

#### vue 笔记

-   监听器 Observe
    -   抽象一个 defineReactive 劫持数据方法 Object.defineProperty(obj,key,{
        get:()=>{}
        }) ，启动同时初始化一个订阅者容器 dep ， 储存对应的订阅者 watcher
    -   defineReactive 中递归遍历子节点，对所有节点进行 Observe()监听操作
-   工具函数 判断对象类型 object.prototype.toString.call(obj).slice(8,-1)
-   创建一个不在原型链上的空对象 Object.create(null)
-   对象 getter 代理

##### 响应式数据

```js
// [pop,push,shift,unshift,splice,reduce,reverse]
var vm = new Vue({
    data: {
        items: ['a', 'b', 'c'],
    },
});
vm.items[1] = 'x'; // 不是响应性的
vm.items.length = 2; // 不是响应性的
```

第一类
`Vue.set(vm.items, indexOfItem, newValue)`
`vm.items.splice(indexOfItem, 1, newValue)`

第二类
`vm.items.splice(newLength)`

### router

-   原理 : 通过这两种方式改变地址栏不会发送请求
-   #hash
    -   通过 window.hashchange 事件监听
-   history
    -   pushState()
    -   replaceState(name,title,'')
        window.popstate 事件监听

### 渲染过程

1 把模板编译为 render 函数
2 实例进行挂载, 根据根节点 render 函数的调用，递归的生成虚拟 dom
3 对比虚拟 dom，渲染到真实 dom
4 组件内部 data 发生变化，组件和子组件引用 data 作为 props 重新调用 render 函数，生成虚拟 dom, 返回到步骤 3
