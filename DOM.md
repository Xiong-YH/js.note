# DOM（文档对象模型）

## 1.nodeType常用属性值

节点的nodeType属性可以显示节点的具体类型

| nodeType值 |        节点类型         |
| :--------: | :---------------------: |
|     1      | 元素节点,比如<p>和<div> |
|     3      |        文字节点         |
|     8      |        注释节点         |
|     9      |      document节点       |
|     10     |         DTO节点         |

## 2.DOM树

- 文档：一个页面就是一个文档，DOM中的document表示
- 元素：页面中所有标签都是元素，DOM中使用element表示
- 节点：网页中所有内容都是节点（标签，属性，文本，注释等），DOM中用node表示

## 3.访问元素节点常用方法

| 方法                              | 功能                   | 兼容性                   |
| --------------------------------- | ---------------------- | ------------------------ |
| document.getElementById( )        | 通过id得到元素         | IE6                      |
| document.getElementByTagName( )   | 通过标签名得到元素     | IE6                      |
| document.getElementByClassName( ) | 通过类名得到元素       | IE9                      |
| document.querySelector( )         | 通过选择器得到元素     | IE8部分兼容，IE9完全兼容 |
| document.querySelectorAll( )      | 通过选择器得到元素数组 | IE8部分兼容，IE9完全兼容 |

- querySelector()只能得到页面上第一个元素，从IE9开始兼容CSS3选择器
- 

## 延迟运行

- 测试DOM代码时，通常JS代码一定要写到HTML节点后面，否则JS无法找到相应的HTML节点
- 可以使用 window.onload = function(){}事件，使页面加载完毕后，再执行指定代码

```javascript
<script>
    window.onload = function(){
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');
    console.log(box1);
    console.log(box2);
};
</script>



<div id = 'box1'>盒子</div>
<div id = 'box2'>盒子</div>
```

## 4.节点的关系

|      关系      |  考虑所有节点   | IE9开始只考虑元素节点  |
| :------------: | :-------------: | :--------------------: |
|     子节点     |   childNodes    |        children        |
|     父节点     |   parentNode    |           同           |
|  第一个子节点  |   firstChild    |   firstElementChild    |
| 最后一个子节点 |    lastChild    |    lastElementChild    |
| 前一个兄弟节点 | previousSibling | previousElementSibling |
| 后一个兄弟节点 |   nextSibling   |   nextElementSibling   |

## 5.改变元素节点中的内容

- innerHTML属性以HTML语法设置节点中的内容
- innerText属性以纯文本的形式设置节点内容

## 6.改变元素节点CSS样式

```javascript
box.style.backgroundColor = 'red';
box.style.backgroundImage = 'url(images/1.jpg)';//最末尾驼峰式命名法
```



## 7.节点的创建

1. document.createElement( )用于创建指定tagname的HTML元素

```javascript
var box = document.createElement('div')
```

新创建的节点是孤儿节点，并没有被挂载到dom树上，看不见

2.必须使用appendChild( )或insertBefore()方法插入至DOM树

- appendChild().任何在dom树上的节点都可以调用，将孤儿节点挂载在内部，成为最后一个子节点

```javascript
父节点.appendChild(孤儿节点)
```

- insertBefore().任何在dom树上的节点都可以调用，将孤儿节点挂载在内部，成为标杆节点之前的节点

```javascript
父节点.insertBefore(孤儿节点，标杆节点)；
```

## 8.移动节点

- 将已挂载到DOM树上的节点必须使用appendChild( )或insertBefore()方法移动

```
新父亲节点.appendChild(已经有父亲的节点)；
```

## 9.删除节点

- removeChild()方法从DOM中删除一个子节点

```
父节点.removeChild(要删除的子节点)
```

- 节点不能主动删除自己，必须由父节点删除

## 10.克隆节点

- cloneNode()方法可以克隆节点，克隆出的节点是孤儿节点

```
var 孤儿节点 = 老节点.cloneNode();
var 孤儿节点 = 老节点.cloneNode(true);
```

- 参数是一个布尔值，表示是否采用深度克隆，如果为true，则该节点的所有后代节点也都会被克隆，如果为flase，则只克隆该节点本身

  
