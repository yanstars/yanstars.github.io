---
title: vue3
date: 2020-09-17
tags:
  - vue
  - js
---

### 新特性

#### 常用的 Composition API

- getCurrentInstance
- defineComponent
- defineAsyncComponent
- setup
- ref
- reactive
- watchEffect
- toRef
- toRefs
- provide
- inject
- readOnly
- renderList
- nextTick

#### script setup Api

- defineProps
- defineEmit
- renderSlots
- useContext
- h

#### example

```js
// setup Component
defineComponent({
  setup(props, { attrs, slots, emit, expose }) {
    ...
    return {}   // 合并data
    // return ()=>{}   render
  },
})

```

```html
<!-- script setup   -->

<script setup>
  const props = defineProps({
    title: String,
  })
  // props.title
  const { slots, attrs } = useContext()
  // 获取 emit
  const emit = defineEmit(['chang-name'])
  // 调用 emit
  emit('chang-name', 'Tom')
</script>
```

### 新的组件

#### Fragment(片断)

#### Teleport(瞬移)

#### Suspense(不确定的)
