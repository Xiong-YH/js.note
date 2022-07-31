# 1.移动开发基础概念

## 1.像素

- 分辨率
- 物理像素（设备像素）实际开发中用不到
- CSS像素（逻辑像素、设备独立像素）
- 设备像素比：dpr   dpr = 设备像素/CSS像素（同一方向）
- 标清屏和高清屏：dpr不一样，标清屏dpr = 1，高清屏dpr >=2（1个css像素对应2×2个物理像素）
- 缩放：改变的是css像素大小
- PPI（DPI）：每英寸的物理像素点（像素密度）

## 2.视口viewport

视口.html

## 3.box-sizing

- border-box
- content-box

## 4.图标字体



## 5.flex布局

- 什么是flex布局

flex是Flexxible Box的缩写，意为‘弹性的盒子’，flex布局也叫弹性布局

- 基本概念

1.fiex容器：采用flex布局的元素，成为fiex容器   

.box{dispiay : flex | inline-flex }

2.flex项目：flex所有子元素自动成为容器成员（孙子元素不是容器成员）

- 容器的属性

1.dispiay

display属性决定是否使用flex布局

flex : 将对象作为弹性伸缩盒显示

inline-flex：将对象作为内联块级弹性伸缩盒显示

2.flex-direction属性

flex-direction决定主轴的方向（项目排列的方向）

row：默认值，主轴为水平方向，起点在左端

row-reverse：主轴为水平方向，起点在右端（反向排列）

conlumn：主轴为竖直方向，起点在上端

conlumn-reverse：主轴为竖直方向，起点在下端（反向排列）

3.flex-wrap属性

flex-wrap定义如果一条轴线排不下，如何换行

nowrap：默认值，不换行

wrap：换行，第一行在上方

wrap-reverse：换行，第一行在下方

4.flex-flow属性

flex-flow是flex-direction和flex-wrap属性的简写，默认值为row nowrap

5.justify-content属性

justify-content定义了项目在主轴上的对其方式

flex-start：左对齐

flex-end：右对齐

center：居中

space-between：两端对齐，项目之间间隔相等

space-around：每个项目两侧间隔相等，项目之间间隔会比项目与边框间隔要大

6.align-items属性

align-items定义项目在交叉轴如何对齐

flex-start：交叉轴起点对齐

flex-end：交叉轴终点对齐

center：居中对齐

baseline：项目第一行文字的基线对齐

stretch：如果项目未设置高度或设为auto，将占满容器的高度

7.align-content属性

align-content定义多根轴线在交叉轴对齐方式，如果项目只有一条轴线，该属性不起作用

flex-start:交叉轴起点对齐

flex-end:交叉轴终点对齐

center:交叉轴的中点对齐

space-between：与交叉轴两端对齐，轴线之间的间隔平均分布

space-around：每根轴线两侧间隔相等，轴线之间的间隔比边框的间距大一倍

stretch：轴线占满整个交叉轴

## 6.项目属性

1.order属性

order定义项目的排列顺序，数值越小，排列越靠前，默认为0

order：number

2.flex-grow属性

flex-grow定义项目的放大比例，默认为0，但如果存在剩余空间，也不放大

如果所有的项目flex-grow属性都为1，则将等分剩余空间

如果一个的项目flex-grow属性为2，其余都为1，则前者占据的剩余空间将比其他项多一倍

如果有的项目有width属性，则将减去width数值再平分

flex-grow：number

3.flex-shrink属性

flex-shrink定义了项目的缩小比例，默认为1，如果空间不足时，项目比例将缩小

如果项目flex-shrink属性都为1，当空间不足时，都将等比例缩小

如果一个项目flex-shrink属性为0，其余为1，空间不足时，前者不缩小，负值对该属性无效

4.flex-basis属性

flex-basis定义了分配多余空间时，项目占据的主轴空间，默认值为auto，即项目本来的大小

flex-basis：length | auto

5.flex属性

flex是flex-grow，flex-shrink，flex-basis的简写，默认值为0 1 auto，后两个属性可选

有两个快捷值：auto（1 1 auto）和none（0 0 auto）

6.align-self属性

align-self允许单个项目与其他项目不一样的对齐方式，可覆盖align-items

默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch

flex-start、flex-end、auto、center、baseline、stretch

## 7.媒体查询

- 媒体查询：@media screen and (min-width:900px){  body{    background-color:red}    }
- 为什么需要媒体查询：一套样式不可能适应各种大小屏幕，针对不同屏幕大小写样式，让页面在不同屏幕上都能正常显示
- 媒体类型：all（default） screen、print、speech
- 媒体查询的逻辑：与（and）、或（，）、非（not）
- 媒体特征表达式：
- 策略：











