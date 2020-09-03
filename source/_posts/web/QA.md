---
title: 前端遇到的面试题
date: 2020 07 08
categories:
    - web
    - Q/A

tags:
    - web
---

### 主要

-   浏览器兼容处理(跨浏览器)
-   性能优化
-   隐式转换规则

#### div 实现富文本相关操作

-   div 设置 contentEditable = rue
-   document.execCommand(sCommand[,交互方式, 动态参数])

#### flex

-   父元素
    -   flex-direction 主轴方向 row | row-reverse | column | column-reverse;
    -   flex-wrap 换行规则 nowrap | wrap | wrap-reverse;
    -   flex-flow flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap。
    -   justify-content 主轴对齐方式 flex-start | flex-end | center | space-between | space-around;
    -   align-items 交叉轴对齐方式 flex-start | flex-end | center | baseline | stretch;
    -   align-content 多轴线对齐 flex-start | flex-end | center | space-between | space-around | stretch;
-   子元素
    -   order 序号
    -   flex-grow 放大
    -   flex-shrink 缩小
    -   flex-basis 占据主轴空间
    -   flex flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto
    -   flex-grow 定义子元素对 元素在 窗口在减去主轴元素长度后 剩余空间的 分配比例
    -   flex-shrink 定义在各个子元素在 不足 空间的减少比例
    -   flex-basis 定义子元素在分配剩余空间之前的元素基本长度
        -   优先级 max-width >flex-basis > width
    -   align-self 定义该元素与交叉轴不一样的对齐方式 stretch h 和 height 冲突

#### css

-   绘制三角形 利用盒模型 隐藏不需要的 border 部分

```css
width: 0;
height: 0;
border-left: 50px solid transparent;
border-right: 50px solid transparent;
border-bottom: 100px solid red;
```

-   不给高充满页面

```css
div {
    position: absolute;
    top: 0;
    bottom: 0;
}
/* 或*/
div {
    flex: 1;
}
```

#### 转数字

-   undefined -> NaN
-   null -> 0
-   boolean true->1 false-> 0
-   number x->x
-   string ''->0 ' '->0 '123'->123 '123a'->NaN 'aa'->NaN
-   object valueOf / toString 转换

#### 隐式转换规则

-   x,y 为 null、undefined 两者中一个 // 返回 true

-   x、y 为 Number 和 String 类型时，则转换为 Number 类型比较。

-   有 Boolean 类型时，Boolean 转化为 Number 类型比较。
-   NAN !=NAN // TRUE
-   `![]==[] -> true` ![] 布尔取反 -> []转布尔为 true ![] 为 false false 转数值为 0 []转数值为 0 所以 0==0  
     同理 `!{}=={} -> false` 因为 {}转数值为 NAN
-   `[]==[] -> false` {}=={} -> false 引用类型比较栈中的地址是否相同

#### JSON 转成 formData

```js
const formData = new FormData();
Object.keys(params).forEach((key) => {
    formData.append(key, params[key]);
});

// 下面也有可能需要 formData 转 JSON，代码如下：

var jsonData = {};
formData.forEach((value, key) => (jsonData[key] = value));
```

#### 继承

-   原型链继承

```js
function Father() {}
Father.prototype.say = function () {
    console.log('I am talking...');
};
function Son() {}
var sonObj_1 = new Son();
console.log(sonObj_1.say); // undefined

// 原型链实现继承的关键代码
Son.prototype = new Father();

var sonObj_2 = new Son();
console.log(sonObj_2.say); // function() {...}

// 缺点：

// 引用类型的属性被所有实例共享
// 在创建Child 的实例时， 不能向Person传参
```

-   经典继承

```js
// 借用构造函数继承（经典继承）
function Person() {
    this.name = 'xiaopao';
    this.colors = ['red', 'blue', 'green'];
}

Person.prototype.getName = function () {
    console.log(this.name);
};

function Child() {
    Person.call(this);
}

var child1 = new Child();
var child2 = new Child();
child1.colors.push('yellow');
console.log(child1.name);
console.log(child1.colors); // ["red", "blue", "green", "yellow"]
console.log(child2.colors); // ["red", "blue", "green"]
// 优点：
// 1.避免了引用类型的属性被所有实例共享
// 2.可以在Child中向Parent传参
// 缺点：
// 1.只是子类的实例，不是父类的实例
// 2.方法都在构造函数中定义，每次创建实例都会创建一遍方法
```

-   经典组合

```js
function Parent(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name);
};

function Child(name, age) {
    Parent.call(this, name); // 第二次调用 Parent()
    this.age = age;
}

Child.prototype = new Parent(); // 第一次调用 Parent()

var child1 = new Child('xiaopao', 18);
var child2 = new Child('lulu', 19);
child1.getName(); // xiaopao
child2.getName(); // lulu
console.log(child1.age); // 18
console.log(child2.age); // 19
child1.colors.push('yellow');
console.log(child1.colors); // ["red", "blue", "green", "yellow"]
console.log(child2.colors); // ["red", "blue", "green"]
console.log(child1 instanceof Child); // true
console.log(child1 instanceof Parent); // true

//         优点：融合原型链继承和构造函数的优点，是JavaScript中最常用的继承模式
//         缺点：调用了两次父类构造函数
```

### AA1

```css
.trans {
    transform: translate(100px, 0) !important;
    transform: rotate(-90deg) !important;
    transform: all 0.1s;
}
```

```js
let child = document.getElementsByClassName('chid')[0];
child.addEventListener(
    'click',
    () => {
        setTimeout(() => {
            child.className = child.className + ' trans';
        }, 1000);
    },
    false
);
```

### AA2

```js
function getProtoType(obj, key) {
    while (true) {
        if (obj.hasOwnProperty(key)) {
            return obj;
        } else {
            obj = obj.__proto__;
        }
    }
}
```

### 函数柯里化

```js
// 普通的add函数
function add(x, y) {
    return x + y;
}

// Currying后
function curryingAdd(x) {
    return function (y) {
        return x + y;
    };
}

add(1, 2); // 3
curryingAdd(1)(2); // 3
```

```js
// 实现一个add方法，使计算结果能够满足如下预期：
add(1)(2)(3) = 6;
add(1, 2, 3)(4) = 10;
add(1)(2)(3)(4)(5) = 15;

function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function () {
        _args.push(...arguments);
        return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    };
    return _adder;
}

add(1)(2)(3); // 6
add(1, 2, 3)(4); // 10
add(1)(2)(3)(4)(5); // 15
add(2, 6)(1); // 9
```
