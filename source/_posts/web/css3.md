---
title: css3新特性
date: 2020 07 18
categories:
    - web
    - css

tags:
    - web
---

### list

-   [aniation](#animation)
-   [transition](#transition)
-   [border](#border)
-   [background](#background)
-   [gradient](#gradient)
-   [wordstyle](#wordstyle)
-   [transform](#transform)
-   [选择器](#选择器)
-   flex
-   initial 设置该属性为它的默认值。请参阅 initial。
-   inherit 从父元素继承该属性。请参阅 inherit。
-   多媒体查询@media

### animation

`animation: name duration timing-function delay iteration-count direction fill-mode play-state;`

-   animation-name：为 @keyframes 动画名称。

-   @Keyframes 规则：使用@keyframes 规则，你可以创建动画。
    语法：`@keyframes animationname {keyframes-selector {css-styles;} }`

    ```css
    @keyframes mymove {
        0% {
            background: red;
        }
        100% {
            background: red;
        }
    }

    @keyframes mymovetwo {
        from {
            background: red;
        }
        to {
            background: red;
        }
    }
    ```

-   animation-duration：动画指定需要多少秒或毫秒完成。ex: 1s

-   animation-timing-function：设置动画将如何完成一个周期。

    -   ease 默认。动画以低速开始，然后加快，在结束前变慢。
    -   linear 动画从头到尾的速度是相同的。
    -   ease-in 动画以低速开始。
    -   ease-out 动画以低速结束。
    -   ease-in-out 动画以低速开始和结束。
    -   cubic-bezier(n,n,n,n) 在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。
    -   steps(number_of_steps, direction)
        -   number_of_steps ：阶梯数（必须是一个正整数），他将动画的总时长按照阶梯数等距划分
        -   direction ：可选值为 start 或 end，默认 end，也可以不写；start 表示动画的第一帧会被立即执行,直接从第二帧开始，然后以第一帧结束；end 则表示动画从第一帧开始到正常结束；

-   animation-delay：设置动画在启动前的延迟间隔，可以是秒或毫秒。

-   animation-iteration-count：定义动画的播放次数。

    -   n 播放 n 次
    -   infinite 无限循环

-   animation-direction：指定是否循环交替反向播放动画。
    -   normal 正常播放
    -   reverse 反向播放
    -   alternate 动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。
    -   alternate-reverse 动画在奇数次（1、3、5...）反向播放，在偶数次（2、4、6...）正向播放。
    -   inherit | initial
-   animation-fill-mode：规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。默认情况下，CSS 动画在第一个关键帧播放完之前不会影响元素，在最后一个关键帧完成后停止影响元素。该属性可重写该行为。

    -   none 默认值 动画在动画执行之前和之后不会应用任何样式到目标元素。
    -   forwards 在动画结束后（由 animation-iteration-count 决定），动画将应用该属性值。
    -   backwards 动画将应用在 animation-delay 定义期间启动动画的第一次迭代的关键帧中定义的属性值。这些都是 from 关键帧中的值（当 animation-direction 为 "normal" 或 "alternate" 时）或 to 关键帧中的值（当 animation-direction 为 "reverse" 或 "alternate-reverse" 时）。
    -   both 动画遵循 forwards 和 backwards 的规则。也就是说，动画会在两个方向上扩展动画属性。
    -   inherit | initial

-   animation-play-state：指定动画是否正在运行或已暂停。

    -   running 默认值 运行动画
    -   paused 暂停动画

### transition

-   transition-property 规定应用过渡的 CSS 属性的名称。 默认 all
-   transition-duration 定义过渡效果花费的时间。默认是 0。
-   transition-timing-function 规定过渡效果的时间曲线。默认是 "ease"。
-   transition-delay 规定过渡效果何时开始。默认是 0。

### border

-   border-radius

-   box-shadow：向框添加一个或多个阴影。 语法：box-shadow: 水平位移 垂直位移 [模糊半径 阴影尺寸 阴影颜色 inset(内部阴影)];

-   box-shadow: 10px 10px 5px #888888;
-   border-image：设置边框图像，该属性是一个简写属性，用于设置以下属性：

-   border-image-source：边框的图片的路径；

-   border-image-slice：图片边框向内偏移；

-   border-image-width：图片边框的宽度；

-   border-image-outset：边框图像区域超出边框的量；

-   border-image-repeat：图像边框是否应平铺(repeate)、铺满(round)或拉伸(stretch)。

-   border-image: url(/i/border.png) 30 30 round;

### background

-   background-size：背景图片的尺寸。
-   background-size: 100px 100px; 第一个值设置宽度，第二个值设置高度
-   background-size: 50% 50%; 以父元素的百分比来设置背景图像的宽度和高度
-   background-size: cover; 把背景图像扩展至足够大，以使背景图像完全覆盖背景区域 -
-   background-size: contain; 把图像图像扩展至最大尺寸，以使其宽度和高度完全适应 - 内容区域
-   background-origin：规定 background-position 属性相对于什么位置来定位。
-   background-origin: padding-box; 背景图像相对于内边距框来定位（默认值）
-   background-origin: border-box; 背景图像相对于边框盒来定位
-   background-origin: content-box; 背景图像相对于内容框来定位
-   background-clip：规定背景的绘制区域。
-
-   background-clip: padding-box; 背景被裁剪到内边距框
-   background-clip: border-box; 背景被裁剪到边框盒（默认值）
-   background-clip: content-box; 背景被裁剪到内容框

### gradient

-   linear-gradient()：线性渐变。 语法：background: linear-gradient(方向, start-color, ..., last-color);

    -   background: linear-gradient(red, blue); 省略方向默认从上到下
    -   background: linear-gradient(to right, red , blue); 从左侧开始的线性渐变，从红色开始，转为蓝色
    -   background: linear-gradient(to bottom right, red , blue); 从左上角到右下角的线性渐变

-   radial-gradient()：径向渐变。 语法：background: radial-gradient(圆的类型 渐变的大小 at 渐变的位置, start-color, ..., last-color);

    -   background: radial-gradient(red, yellow, green); 椭圆形渐变

    -   background: radial-gradient(circle, red, yellow, green); 圆形渐变

    -   background: radial-gradient(red 10%, green 50%, blue 100%); 颜色结点不均匀分布

    -   background: radial-gradient(at 50% 50%, blue, green, yellow); 圆心在中间

    -   background: radial-gradient(closest-side at 60% 55%, blue, green, yellow); 圆心在离左侧 60%，离上侧 50%的地方，半径长度为从圆心到离圆心最近的边

### wordstyle

-   word-break：定义如何换行。

    -   nomal : 浏览器默认换行规则
    -   break-all 允许单词内换行
    -   keep-all 只能半角空格或连字符换

-   word-wrap：允许长的内容可以自动换行。

    -   normal 只允许断点字符
    -   break-word 长单词或者 url 内部换行

-   text-overflow：指定当文本溢出包含它的元素，应该发生什么。

    -   clip 修建文本
    -   ellipsis 显示省略号
    -   string （firefox ） 代替被剪切的文本

-   text-shadow：文字阴影。 语法：text-shadow: 水平位移 垂直位移 [模糊半径 阴影颜色];

### transform

-   transform：应用于元素的 2D 或 3D 转换。这个属性允许你将元素旋转，缩放，移动，倾斜等。 语法：transform: none|transform-functions;

*   transform-origin：允许您更改转换元素的位置。2D 转换元素可以改变元素的 X 和 Y 轴。 3D 转换元素，还可以更改元素的 Z 轴。语法：transform-origin: x-axis y-axis z-axis;

-   transform-origin: 0% 0%; 将元素左上角设为旋转点
-   transform-style：指定嵌套元素是怎样在三维空间中呈现。

-   2D 转换方法

    -   rotate(angle)：定义 2D 旋转，在参数中规定角度。
    -   matrix(a,b,c,d,e,f)：定义 2D 转换，使用六个值的矩阵。transform: matrix(2, 1, 0, 2, 50, 50); 水平放大两倍，水平倾斜，垂直放大两倍，水平向左移动 50%，垂直向下移动 50%

    -   translate ;移动

        -   translate(x,y)：指定元素在二维空间中的位移。X 轴方向向右，Y 轴方向向下。

        -   translateX(n)：指定元素在 X 轴中的位移。

        -   translateY(n)：指定元素在 Y 轴中的位移。

    -   scale(2); 放大两倍

        -   scale(n)：定义 2D 缩放转换。

        -   scaleX(n)：定义 X 轴方向的缩放转换。

        -   scaleY(n)：定义 Y 轴方向的缩放转换。

    *   skew ;倾斜

        -   skew(x-angle,y-angle)：定义沿着 X 和 Y 轴的 2D 倾斜转换。
        -   skewX(angle)：定义沿着 X 轴的 2D 倾斜转换。
        -   skewY(angle)：定义沿着 Y 轴的 2D 倾斜转换。

-   3D 转换方法

    -   perspective(n)：为 3D 转换元素定义透视视图。
    -   translate3d(x,y,z)：指定元素在三维空间中的位移。X 轴方向向右，Y 轴方向向下，Z 轴方向向你。
    -   translateX(x)：指定元素在 X 轴中的位移。
    -   translateY(y)：指定元素在 Y 轴中的位移。
    -   translateZ(z)：指定元素在 Z 轴中的位移。
    -   scale3d(x,y,z)：定义 3D 缩放转换。
    -   scaleX(x)：通过设置 X 轴的值来定义缩放转换。
    -   scaleY(y)：通过设置 Y 轴的值来定义缩放转换。
    -   scaleZ(z)：通过设置 Z 轴的值来定义缩放转换。
    -   rotate3d(x,y,z,angle)：定义 3D 旋转。
    -   rotateX(x)：定义沿着 X 轴的 3D 旋转。
    -   rotateY(y)：定义沿着 Y 轴的 3D 旋转。
    -   rotateZ(z)：定义沿着 Z 轴的 3D 旋转。
    -   matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)：定义 3D 转换，使用 16 个值的 4x4 矩阵。

### 选择器

-   p:first-of-type 选择器匹配属于其父元素的特定类型的首个子元素的每个元素。
-   p:last-of-type 选器择器匹配属于其父元素的特定类型的最后一个子元素的每个元素。
-   p:only-of-type 选择器匹配属于其父元素的特定类型的唯一子元素的每个元素。
-   p:only-child 选择器匹配属于其父元素的唯一子元素的每个元素。
-   p:nth-child(n) 选择器匹配属于其父元素的第 N 个子元素，不论元素的类型。 n 可以是数字、关键词或公式。
-   :enabled :disabled 表单控件的禁用状态。
-   :checked 选择器匹配每个选中的输入元素（仅适用于单选按钮或复选框）。
