# head

-   border-radius

-   box-shadow：向框添加一个或多个阴影。

语法：box-shadow: 水平位移 垂直位移 [模糊半径 阴影尺寸 阴影颜色 inset(内部阴影)];

box-shadow: 10px 10px 5px #888888;
border-image：设置边框图像，该属性是一个简写属性，用于设置以下属性：

border-image-source：边框的图片的路径；

border-image-slice：图片边框向内偏移；

border-image-width：图片边框的宽度；

border-image-outset：边框图像区域超出边框的量；

border-image-repeat：图像边框是否应平铺(repeate)、铺满(round)或拉伸(stretch)。

border-image: url(/i/border.png) 30 30 round;

-   background-size：背景图片的尺寸。

background-size: 100px 100px;/_ 第一个值设置宽度，第二个值设置高度 _/
background-size: 50% 50%;/_ 以父元素的百分比来设置背景图像的宽度和高度 _/
background-size: cover;/_ 把背景图像扩展至足够大，以使背景图像完全覆盖背景区域 _/
background-size: contain;/_ 把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域 _/
background-origin：规定 background-position 属性相对于什么位置来定位。

background-origin: padding-box;/_ 背景图像相对于内边距框来定位（默认值） _/
background-origin: border-box;/_ 背景图像相对于边框盒来定位 _/
background-origin: content-box;/_ 背景图像相对于内容框来定位 _/
background-clip：规定背景的绘制区域。

background-clip: padding-box;/_ 背景被裁剪到内边距框 _/
background-clip: border-box;/_ 背景被裁剪到边框盒（默认值） _/
background-clip: content-box;/_ 背景被裁剪到内容框 _/
渐变

-   linear-gradient()：线性渐变。

语法：background: linear-gradient(方向, start-color, ..., last-color);

background: linear-gradient(red, blue); /_ 省略方向默认从上到下 _/
background: linear-gradient(to right, red , blue);/_ 从左侧开始的线性渐变，从红色开始，转为蓝色 _/
background: linear-gradient(to bottom right, red , blue); /_ 从左上角到右下角的线性渐变 _/
radial-gradient()：径向渐变。

语法：background: radial-gradient(圆的类型 渐变的大小 at 渐变的位置, start-color, ..., last-color);

/_ 椭圆形渐变 _/
background: radial-gradient(red, yellow, green);
/_ 圆形渐变 _/
background: radial-gradient(circle, red, yellow, green);
/_ 颜色结点不均匀分布 _/
background: radial-gradient(red 10%, green 50%, blue 100%);
/_ 圆心在中间 _/
background: radial-gradient(at 50% 50%, blue, green, yellow);
/_ 圆心在离左侧 60%，离上侧 50%的地方，半径长度为从圆心到离圆心最近的边 _/
background: radial-gradient(closest-side at 60% 55%, blue, green, yellow);
文本效果

-   word-break：定义如何换行。
    nomal : 浏览器默认换行规则
    break-all 允许单词内换行
    keep-all 只能半角空格或连字符换

-   word-wrap：允许长的内容可以自动换行。
    normal 只允许断点字符
    break-word 长单词或者 url 内部换行

-   text-overflow：指定当文本溢出包含它的元素，应该发生什么。
    clip 修建文本
    ellipsis 显示省略号
    string （firefox ） 代替被剪切的文本

-   text-shadow：文字阴影。

语法：text-shadow: 水平位移 垂直位移 [模糊半径 阴影颜色];

-   transform：应用于元素的 2D 或 3D 转换。这个属性允许你将元素旋转，缩放，移动，倾斜等。

语法：transform: none（默认)|transform-functions;

transform-origin：允许您更改转换元素的位置。2D 转换元素可以改变元素的 X 和 Y 轴。 3D 转换元素，还可以更改元素的 Z 轴。

语法：transform-origin: x-axis y-axis z-axis;

transform-origin: 0% 0%;/_ 将元素左上角设为旋转点 _/
transform-style：指定嵌套元素是怎样在三维空间中呈现。

2D 转换方法

rotate(angle)：定义 2D 旋转，在参数中规定角度。

translate(x,y)：指定元素在二维空间中的位移。X 轴方向向右，Y 轴方向向下。

translateX(n)：指定元素在 X 轴中的位移。

translateY(n)：指定元素在 Y 轴中的位移。

scale(n)：定义 2D 缩放转换。

transform: scale(2);/_ 放大两倍 _/
scaleX(n)：定义 X 轴方向的缩放转换。

scaleY(n)：定义 Y 轴方向的缩放转换。

matrix(a,b,c,d,e,f)：定义 2D 转换，使用六个值的矩阵。

transform: matrix(2, 1, 0, 2, 50, 50); /_ 水平放大两倍，水平倾斜，垂直放大两倍，水平向左移动 50%，垂直向下移动 50% _/
skew(x-angle,y-angle)：定义沿着 X 和 Y 轴的 2D 倾斜转换。

skewX(angle)：定义沿着 X 轴的 2D 倾斜转换。

skewY(angle)：定义沿着 Y 轴的 2D 倾斜转换。

3D 转换方法

perspective(n)：为 3D 转换元素定义透视视图。

translate3d(x,y,z)：指定元素在三维空间中的位移。X 轴方向向右，Y 轴方向向下，Z 轴方向向你。

translateX(x)：指定元素在 X 轴中的位移。

translateY(y)：指定元素在 Y 轴中的位移。

translateZ(z)：指定元素在 Z 轴中的位移。

scale3d(x,y,z)：定义 3D 缩放转换。

scaleX(x)：通过设置 X 轴的值来定义缩放转换。

scaleY(y)：通过设置 Y 轴的值来定义缩放转换。

scaleZ(z)：通过设置 Z 轴的值来定义缩放转换。

rotate3d(x,y,z,angle)：定义 3D 旋转。

rotateX(x)：定义沿着 X 轴的 3D 旋转。

rotateY(y)：定义沿着 Y 轴的 3D 旋转。

rotateZ(z)：定义沿着 Z 轴的 3D 旋转。

matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)：定义 3D 转换，使用 16 个值的 4x4 矩阵。

-   transition：设置元素当过渡效果，四个简写属性为：

transition-property：过渡属性名。

transition-duration：规定完成过渡效果需要花费的时间（以秒或毫秒计）。

transition-timing-function：指定切换效果的速度。

transition-delay：指定何时将开始切换效果。

-   animation：为元素添加动画，是一个简写属性。

语法：animation: name duration timing-function delay iteration-count direction fill-mode play-state;

animation-name：为 @keyframes 动画名称。

animation-duration：动画指定需要多少秒或毫秒完成。

animation-timing-function：设置动画将如何完成一个周期。

animation-delay：设置动画在启动前的延迟间隔，可以是秒或毫秒。

animation-iteration-count：定义动画的播放次数。

animation-direction：指定是否应该轮流反向播放动画。

animation-fill-mode：规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。默认情况下，CSS 动画在第一个关键帧播放完之前不会影响元素，在最后一个关键帧完成后停止影响元素。该属性可重写该行为。

animation-play-state：指定动画是否正在运行或已暂停。

@Keyframes 规则：使用@keyframes 规则，你可以创建动画。
语法：@keyframes animationname {keyframes-selector {css-styles;}}

@keyframes mymove {
0% {top:0px; left:0px; background:red;}
25% {top:0px; left:100px; background:blue;}
50% {top:100px; left:100px; background:yellow;}
75% {top:100px; left:0px; background:green;}
100% {top:0px; left:0px; background:red;}
}

1、p:first-of-type

:first-of-type 选择器匹配属于其父元素的特定类型的首个子元素的每个元素。

2、p:last-of-type

:last-of-type 选择器匹配属于其父元素的特定类型的最后一个子元素的每个元素。

3、p:only-of-type

:only-of-type 选择器匹配属于其父元素的特定类型的唯一子元素的每个元素。

4、p:only-child

:only-child 选择器匹配属于其父元素的唯一子元素的每个元素。

5、p:nth-child(2)

:nth-child(n) 选择器匹配属于其父元素的第 N 个子元素，不论元素的类型。

n 可以是数字、关键词或公式。

6、:enabled :disabled

表单控件的禁用状态。

7、:checked

:checked 选择器匹配每个选中的输入元素（仅适用于单选按钮或复选框）。

Flex 弹性布局

多媒体查询@media
