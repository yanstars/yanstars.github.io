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

### vue

- 数据劫持
- 发布 订阅
- 监听器 Observe ：劫持 并监听所有属性，如果有变动的，就通知订阅者
- 消息订阅器 Dep ：收集订阅者，链接 监听器 Observer 和订阅者 Watcher
- 解析器 Compile: 扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器
- 订阅者 Watcher : 收到属性的变化通知并执行相应的函数，从而更新视图

### 组件传值

- v-bind / prop
- eventBus Vue.prototype.bus = new Vue() / this.bus.\$on | this.bus.\$emit
- provide / inject
- this.\$refs.child / this.\$parent
- vuex
- localstroage
- vm.\$attrs 和 vm.\$listeners

#### vue 笔记

- 监听器 Observe
  - 抽象一个 `defineReactive` 劫持数据方法 `Object.defineProperty`，启动同时初始化一个订阅者容器 dep ， 储存对应的订阅者 watcher
  - `defineReactive` 中递归遍历子节点，对所有节点进行 Observe()监听操作
- 工具函数 判断对象类型 `object.prototype.toString.call(obj).slice(8,-1)`
- 创建一个不在原型链上的空对象` Object.create(null)`
- 对象 `getter` 代理

##### 响应式数据注意点

```js
// [pop,push,shift,unshift,splice,reduce,reverse]

var vm = new Vue({
  data: {
    items: ['a', 'b', 'c'],
  },
})
vm.items[1] = 'x' // 不是响应性的
vm.items.length = 2 // 不是响应性的
```

第一类
`Vue.set(vm.items, indexOfItem, newValue)`
`vm.items.splice(indexOfItem, 1, newValue)`

第二类
`vm.items.splice(newLength)`

### router

- 原理 : 通过这两种方式改变地址栏不会发送请求
- #hash
  - 通过 window.hashchange 事件监听
- history
  - pushState()
  - replaceState(name,title,'')
    window.popstate 事件监听

### 渲染过程

1. 把模板编译为 render 函数
2. 实例进行挂载, 根据根节点 render 函数的调用，递归的生成虚拟 dom
3. 对比虚拟 dom，渲染到真实 dom
4. 组件内部 data 发生变化，组件和子组件引用 data 作为 props 重新调用 render 函数，生成虚拟 dom, 返回到步骤 3

### 技巧

- 自定义 dispath 方法向上传值 适用于表单校验

  ```js
  this.dispatch('formItem', 'on-form-change', this.value)
  ```

- 父组件传递动态参数给动态组件
  ⚠️

  > 此时代码在.js 文件内
  > 项目内需要配合 babel 使用 jsx 语法
  > 如果写在。vue 文件中，必须去掉 template 标签

  ```js
  // 使用 functional 组件
  //  render 函数动态渲染
  export default {
    functional: true,
    // TODO  待深入
    render: function (h, context) {
      // h 必须存在 指定作用域 同时生成vnode: h（‘div’,obj,[arg]）
      // context 上下文对象
      const { out, config } = context.props.model
      const data = {
        attrs: { ...config },
      }
      const result = (
        <div class="mytest">
          <span>{out.label}</span>
          <yu-select {...data}></yu-select>
        </div>
      )
      return result
    },
  }
  ```

- 监听

  ```js
  this.$on('hook:updated', () => {})
  this.$once('hook:updated', () => {})
  let result = this.$watch(
    () => someObj,
    (newValue, oldValue) => {},
    { deep: true, immediate: true },
  )
  result() // 取消监听
  ```

- 自定义组件 v-model

  ```js
  export default {
    model: {
      props: '', // 自上而下传入的志
      event: '', // 抛出的事件
    },
  }
  ```

- 利用函数实现过滤器效果(vue3 过滤器废除)
- 作用域插槽

  ```html
  <!-- 子组件 -->
  <slot :obj="item" name="key1">默认值</slot>

  <!-- 父组件 -->
  <child>
    <template #key1="{item}">
      <p>item</p>
    </template>
  </child>
  ```

- vuex 自定义 state 类，实现数据的同步，异步，集中管理
- 组件的 key 值改变，会保证组件的渲染和数据更新，而不仅是内容和属性改变 （patch 算法）（重新进行生命周期）
