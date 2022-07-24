# 1.XHR的属性

## 1.responseType和response属性

responseType：响应数据的类型

responseText:文本形式的响应内容，只能在没有设置responseType或者responseType = ' '或'text'的时候才能使用

```javascript
const url = 'https://www.imooc.com/api/http/search/suggest?word=js';
const xhr = new XMLHttpRequest();
//开始监听
xhr.onreadystatechange = ()=>{
    if(xhr.readyState !== 4) return;
    if((xhr.status >=200 && xhr.status<300)||xhr.status === 304) {
        //console.log(xhr.responseText);
        console.log('response',xhr.response)
    }
};
//准备发送请求
xhr.open('GET',url,true);
//xhr.responseType = 'text'可替代xhr.responseText
xhr.responseType = 'json'//得到的是josn格式的字符串
//发送请求
xhr.send(null);
```

responseType和response属性IE6~9不支持，IE10开始支持

## 2.timeout属性

设置请求超时时间（单位ms）

```javascript
xhr.open('GET',url,true);
xhr.timeout = 10000;//
xhr.send(null);
```

IE6~7不支持，IE8开始支持

## 3.withCredentials属性

指定使用Ajax发送请求时是否携带cookie

使用Ajax发送请求，默认情况下，同域时，会携带cookie；跨域时，不会

```javascript
xhr.withCredentials = true;
```

最终能否成功跨域携带cookie，还得看服务器端，Access-Control-Allow-Origin  不能用星号通配符，必须有具体域名

IE6~9不支持，IE10开始支持

# 2.XHR的方法

## 1.abort()

终止当前请求，一般配合abort事件一起使用

## 2.setRequestHeader()

设置请求头信息



