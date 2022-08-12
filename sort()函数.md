# 关于sort()的笔记

## 1.API及涉及知识点

 sort()方法默认情况下，会按照升序重新排列数组元素，即最小的值在前面，最大的值在后面。sort()会在每一项上调用 String()将数组里面每一项转换成字符串，然后根据字符串的Unicode码进行排序。无论元素是不是数值，都优先使用元素第一个字符的ASCII值来进行比较排序。

**注意**：调用sort()之后原数组改变

例如

```javascript
let values = [0, 1, 5, 10, 15]; 
values.sort(); 
alert(values); // 0,1,10,15,5
```

## 2.应用场景

sort()用于给数组排序，升序降序都可以，但是因为是先将数值转化成字符串，根据字符串UniCode码进行比较，所以sort方法可以接收一个比较函数

```javascript
function compare(value1, value2) { 
 if (value1 < value2) { 
 return -1; 
 } else if (value1 > value2) { 
 return 1; 
 } else { 
 return 0; 
 } 
}
let values = [0, 1, 5, 10, 15]; 
values.sort(compare); 
alert(values); // 0,1,5,10,15
```

比较函数也能产生降序的效果，将前两个的返回值交换一下即可



也可以用箭头函数的形式去实现升序降序

升序

```javascript
    let values = [0, 1, 5, 10, 15]; 
    console.log(values.sort((a,b)=>{return a-b}))//[0, 1, 5, 10, 15]
```

降序

```javascript
    let values = [0, 1, 5, 10, 15]; 
    console.log(values.sort((a,b)=>{return b-a}))// [15, 10, 5, 1, 0]
```

也可给数组中的对象进行排序

```javascript
let values = [
    {id:3,name:'张三'},
    {id:1,name:'赵四'},
    {id:2,name:'李五'}
]
console.log(values.sort((a,b)=>{return a.id-b.id}))
//0: {id: 1, name: '赵四'}
//1: {id: 2, name: '李五'}
//2: {id: 3, name: '张三'}
```

## 3.底层原理

v8引擎中，sort函数使用插入排序和快速排序两种算法，数量小于10的数组使用 InsertionSort，比10大的数组则使用 QuickSort。

快速排序

```javascript
  function quickSort(arr,left,right){
    var i=left=left?left:0;
    var j=right=right?right:arr.length-1;
    var middle=Math.floor((i+j)/2)
    var pivot=arr[middle];
    var tmp;
    while(i<=j){
        while(arr[j]>pivot) {j--};
        while(arr[i]<pivot) {i++};
        if(i<=j){
            tmp=arr[i];
            arr[i]=arr[j];
            arr[j]=tmp;
            i++;
            j--;
        }
        if(left<j){
            quickSort(arr,left,j);
        }
        if(right>i){
            quickSort(arr,i,right);
        }
    }
    return arr;
}

```

插入排序

```javascript
function insertSort(arr){
      var length=arr.length;
      for(var i=1;i<length;i++){
          var temp=arr[i];
          var j=i;
          while(arr[j-1]>temp&&j>0){
              arr[j]=arr[j-1];
              j--;
          }
          arr[j]=temp;
      }
      return arr;
  }
  let arr = [1,5,60,70,23,45]
  console.log(insertSort(arr))//[1, 5, 23, 45, 60, 70]
```

