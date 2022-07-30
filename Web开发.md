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

align-content定义多根轴线在交叉轴对齐方式

