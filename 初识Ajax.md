# 1.初识Ajax

## 1.Ajax是什么

**A**synchronous **J**avascript **A**nd **X**ML（异步JavaScript和[XML](https://baike.baidu.com/item/XML/86251)）的简写

Ajax中的异步：可以异步地向服务器发送请求，在等待响应的过程中，不会阻塞当前页面，浏览器可以做自己的事，直到成功获取响应后，浏览器才开始响应数据。

XML（可扩展标记语言）前端和后端数据通信时传输数据的一种格式

XML现在不怎么用了，常用的是JSON

Ajax是浏览器与服务器之间的一种异步通信方式，使用Ajax可以在不重新加载页面的情况下，对页面进行更新

## 2.搭建Ajax开发环境

Ajax需要服务器环境，非服务器环境下，很多浏览器无法使用Ajax

# 2.Ajax的基本用法

## 1.XMLHttpRequest

Ajax想要实现浏览器和服务器之间的异步通信，需要依靠构造函数XMLHttpRequest

无论是XMLHttpRequest，还是Ajax，都没有和具体某种数据格式绑定，没有强制要求使用XML

## 2.Ajax的使用步骤

1.创建xhr对象

```javascript
const xhr = new XMLHttpRequest();
```

4.监听事件，处理响应

当获取到响应之后，会触发xhr对象的readystatechange事件，可以在该事件中对响应进行处理

```javascript
xhr.onreadystatechange = () =>{
    if(xhr.readyState !== 4) return;
    //xhr.status:HTTP状态码
    //HTTP CODE状态码，确保请求或者是服务器端没出问题
    if((xhr.status >=200 & xhr.status<300) ||xhr.status === 304) {
        console.log('正常响应')；
        //获取响应后，响应内容会自动填充xhr对象的属性
        console.log(xhr.responseText)；获取到数据的字符串形式
    }
};//为了兼容性问题，不使用this，直接使用xhr，并且放在open之前

//readystatechange可以配合addEventListener使用，不过IE6~8不支持addEventListener
xhr.addEventListener('readystatechange',()=>{},fales)

//readystatechange事件监听readyState的状态变化
//它的值一共0~4，5个状态
//0：未初始化，尚未调用open()
//1：启动。已经调用open(),尚未调用send()
//2：发送。已经调用send()，但未收到响应
//3：接收。已经收到部分响应数据
//4：完成。已经收到全部数据响应，而且已经在浏览器中使用

```

2.准备发送

```javascript
xhr.open('HTTP方法GET,POST,PUT,DELETE','地址URL 远程的网址和本地的路径'，true//表示异步);
```

3.发送请求

```javascript
//调用send()正式发送请求
xhr.send();
//send()的参数是通过请求体携带，GET没有请求体，POST有请求体
xhr.send(null)//使用GET方法时填入，可以不填，防止不兼容才填null
```

## 3.使用Ajax完成前后端通信

```javascript
const url = https://www.imooc.com/
const xhr = new XMLHttpRequest();
//开始监听
xhr.onreadystatechange = ()=>{
    if(xhr.readyState !== 4) return;
    if((xhr.status >=200 && xhr.status<300)||xhr.status === 304) {
        console.log(xhr.responseText);
    }
};
//准备发送请求
xhr.open('GET',url,true);
//发送请求
xhr.send(null);
```

