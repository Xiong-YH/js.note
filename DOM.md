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

