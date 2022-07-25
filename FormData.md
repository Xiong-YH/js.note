# 1.FormData

## 1.使用Ajax提交表单

FormData案例.html

## 2.FormData

通过HTML表单元素创建FormData对象

```html
<body>
    <form>
        
    </form>
</body>
<script>
    const fd = new FormData(表单元素)；
    xhr.send(fd);
</script>
```

通过append()方法添加数据

```javascript
const data = new FormData(表单元素);
data.append('age',18);
data.append('sex',female);
```

IE10及以上支持

# 2.封装Ajax













