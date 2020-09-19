---
title: vue3 新特性
date: 2020-09-17
tags:
  - vue
  - js
---

### 新特性

- Composition API

  - 清晰的代码结构
  - 消除重复逻辑

    ```html
    <template>
    	<div class="counter">
    		<p>count: {{ count }}</p>
    		<p>NewVal (count + 2): {{ countDouble }}</p>
    		<button @click="inc">Increment</button>
    		<button @click="dec">Decrement</button>
    		<p>Message: {{ msg }}</p>
    		<button @click="changeMessage()">Change Message</button>
    	</div>
    </template>
    ```

    ```js
    <script>
    import { ref, computed, watch } from "vue";
    export default {
    setup() {
        /* ---------------------------------------------------- */
        let count = ref(0);
        const countDouble = computed(() => count.value * 2);
        watch(count, (newVal) => {
        console.log("count changed", newVal);
        });
        const inc = () => {
        count.value += 1;
        };
        const dec = () => {
        if (count.value !== 0) {
            count.value -= 1;
        }
        };
        /* ---------------------------------------------------- */
        let msg = ref("some text");
        watch(msg, (newVal) => {
        console.log("msg changed", newVal);
        });
        const changeMessage = () => {
        msg.value = "new Message";
        };
        /* ---------------------------------------------------- */
        return {
        count,
        inc,
        dec,
        countDouble,
        msg,
        changeMessage,
        };
    },
    };
    </script>
    ```

- Multiple root elements

- Suspense

  - Suspense 的出现大大简化了这个过程：它提供了 default 和 fallback 两种状态：
  -

  ```html
      <template>
        <Suspense>
            <template #default>
            <div v-for="item in articleList" :key="item.id">
                <article>
                <h2>{{ item.title }}</h2>
                <p>{{ item.body }}</p>
                </article>
            </div>
            </template>
            <template #fallback>
            Articles loading...
            </template>
        </Suspense>
    </template
  ```

- Multiple v-models

  - 允许绑定多个 v-model
  - 子组件

  ```html
  <template>
  	<div>
  		<label>Name: </label>
  		<input :value="name" @input="updateName($event.target.value)" />
  		<label>Age: </label>
  		<input :value="age" @input="updateAge($event.target.value)" />
  	</div>
  </template>
  ```

  ```js
  export default {
  	props: {
  		name: String,
  		age: Number,
  	},
  	setup(props, { emit }) {
  		const updateName = value => {
  			emit('update:name', value)
  		}
  		const updateAge = value => {
  			emit('update:age', +value)
  		}
  		return { updateName, updateAge }
  	},
  }
  ```

- 父组件

  ```html
  <template>
  	<survey-form v-model:name="name" v-model:age="age"> {" "} </survey-form>
  </template>
  ```
