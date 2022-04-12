## let、const和var的区别

1.重复声明

已经存在的变量或常量又声明了一遍，var允许重复声明，let、const不允许

```javascript
var a = 1；
var a = 2；
console.log(a);//能输出a = 2
let b = 1；
let b = 2；
console.log(b);//会报错
function fun(a) {
    let a = 1;
}//会报错
```

2.变量提升

var会提升变量声明到当前作用域顶部

```javascript
console.log(a);
var a  = 1;//输出undefined，只提升变量不提升值
console.log(a);//输出1
```

let、const不存在提升变量

```javascript
console.log(a);
let a = 1;//会报错
const b = 2；//会报错
```

3.暂时性死区

只要作用域内存在let、const，它们所声明的变量或常量就自动“绑定”这个区域，不再受到外部作用域的影响，var不存在暂时性死区

```javascript
let a = 2；
function fun (){
	console.log(a);//会报错，因为下方let自动绑定作用域
	let a = 1;
}
fun();//调用函数时才有作用域
let b = 3；
function func() {
    console.log(b);
}
func();//能输出3
```

4.window对象的属性和方法（全局作用域中）

全局作用域中，var声明的变量，通过function声明的函数会自动变成window对象的属性或方法

```javascript
var a = 1；
function add (){}
console.log(window.a);//输出1
console.log(window.add === add);//输出true
```

let、const不会

```javascript
let a = 1；
const add = function(){};
console.log(window.a)//undefined
console.log(window.add === add)//false
```

5.块级作用域

