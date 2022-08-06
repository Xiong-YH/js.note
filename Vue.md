## 1.什么是vue？

一套用于构建用户界面的渐进式JavaScript框架

## 2.特点

1.采用组件化模式，提高代码复用率，且让代码更好维护

2.声明式编码，让编码人员无需直接操作DOM，提高开发效率

## 3.初识Vue

1，想让vue工作，必须创建一个vue实例，且要传入一个配置对象

2.root容器里面的代码依然符合html规范，只不过混入了一些特殊的vue语法

3.root容器里面的代码被称为‘vue模板’

4.vue实例和容器是一一对应的

5.真实开发中只有一个vue实例，并且会配合组件一起使用

6.{{xxx}}中的xxx写js表达式，且xxx可以自动读取到data中所有属性

7.一旦data中的数据发生改变，那么页面中用到该数据的地方能自动更新

## 4.Vue模板语法

1.插值语法

功能：用于解析标签体内容

写法：{{xxx}}，xxx是js表达式，且xxx可以自动读取到data中所有属性

2.指令语法

功能：用于解析标签（标签属性、标签体内容、绑定事件

举例：v-bind：href = “xxx”或简写成：href = “xxx”，同样xxx要写js表达式

## 5.Vue数据绑定

1.单向绑定（v-bind）：数据只能从data流向页面

2.双向绑定（v-model）：数据不仅能从data流向页面，还可以从页面流向data

备注：1.双向绑定一般应用在表单类元素上，（input，select等）

​           2.v-model:value可以简写为v-model，因为v-model默认收集的就是value值

```html
<body>
    <div id="root">
        单项数据绑定：<input type="text" v-bind:value="name"><br>
        双向数据绑定：<input type="text" v-model:value="name"><br>
    </div>
</body>
<script>
    Vue.config.productionTip = false;//阻止vue在使用时产生提示


    new Vue({
        el:'#root',//指定当前为哪个容器服务
        data:{
            name:'尚硅谷',
        }
    })
    console.log(new Vue)
</script>
</html>
```

