# localStorage的注意事项

## 1.localStorage的存储期限

localStorage是持久化的本地储存，除非手动清除（比如通过js清除，或者浏览器删除缓存），否则是不会过期的 

## 2.sessionStorage

当会话结束（比如关闭浏览器），sessionStorage数据会被清空

```javascript
sessionStorage.setItem()
sessionStorage.getItem()
sessionStorage.removeItem()
sessionStorage.clear()
```

## 3.localStorage的键和值

储存的键和值只能是字符串类型，不是字符串也会先转化成字符串

## 4.不同域名下能否共用localStorage

不同域名下能共用localStorage

## 5.localStorage的兼容性

IE7版本及以下不兼容，IE8开始兼容