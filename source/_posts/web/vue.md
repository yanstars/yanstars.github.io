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

#### vue 源码阅读笔记

##### 响应式数据

```js
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
