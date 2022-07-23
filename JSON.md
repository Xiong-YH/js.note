# 1.初识JSON

## 1.JSON是什么

JSON全称是JavaScript Object Notation

Ajax发送和接收数据的一种格式

比如XML,usename=alex,JSON

```javascript
const url = 'https://www.imooc.com/api/http/search/suggest?word=js
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
//{"code":200,"data":[{"word":"jsp"},{"word":"js"},{"word":"json"},{"word":"js \u5165\u95e8"},{"word":"jstl"}]}
//JSON格式
```



## 2.为什么需要JSON

JSON有三种形式，每种形式写法都和js的数据类型很像，可以轻松的和js中数据类型相互转换

# 2.JSON的三种形式

## 1.简单值形式

文件后缀：.json

JSON中没有注释，不支持undefined，字符串只能是" "

```json
5
"str"
true
false
null
```

数据类型对应js中简单数据类型，数字、字符串、布尔值、null

## 2.对象形式

JSON中的对象形式对应js中的对象

```json
{
    "name":"张三"，
    "age":18,
    "hobby":["足球","乒乓球"]，
	"family":{
        "father":"李四"，
        "mother":"小红"，
    }
}
```

## 3.数组形式

JSON中的数组形式对应js中的数组

```json
[1,"hi",null]
```

# 3.JSON的常用方法

## 1.JSON.parse()

JSON.parse()可以将JSON格式中的字符串解析成JS中对应值

JSON.parse()获取到的是对象

```javascript
const url = 'https://www.imooc.com/api/http/search/suggest?word=js
const xhr = new XMLHttpRequest();
//开始监听
xhr.onreadystatechange = ()=>{
    if(xhr.readyState !== 4) return;
    if((xhr.status >=200 && xhr.status<300)||xhr.status === 304) {
        console.log(xhr.responseText);
        console.log(JSON.parse(xhr.responseText))；
        console.log(JSON.parse(xhr.responseText).data)
    }
};
//准备发送请求
xhr.open('GET',url,true);
//发送请求
xhr.send(null);
//{"code":200,"data":[{"word":"jsp"},{"word":"js"},{"word":"json"},{"word":"js \u5165\u95e8"},{"word":"jstl"}]}
//JSON格式
```



## 2.JSON.stringify()

JSON.stringify()可以将js的基本数据类型，对象或者数组转化成字符串

```javascript
const url = 'https://www.imooc.com/api/http/search/suggest?word=js
const xhr = new XMLHttpRequest();
xhr.open('POST',url,true);
xhr.send(JSON.stringify({
    username:'alex';
    age:18;
}))
```



## 3.使用JSON.parse()和JSON.stringify()封装localStorage

案例请看文件：使用JSON.parse()和JSON.stringify()封装localStorage


