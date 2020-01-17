---
autoGroup-1: webpack 
title: webpack API 
---



## require.context

### 适用于 引入多个组件 且都在同一根路径

#### [https://webpack.js.org/loaders/raw-loader/](https://webpack.js.org/loaders/raw-loader/)

`const requireEffect = require.context('../effects', false, /\.vue$/);`

**require.context函数接受三个参数**

1. **directory {String} -读取文件的路径**
2. **useSubdirectories {Boolean} -是否遍历文件的子目录**
3. **regExp {RegExp} -匹配文件的正则**

相似点复习

``` js
Object.keys 返回一个所有元素为字符串的数组，其元素来自于从给定的object上面可直接枚举的属性。这些属性的顺序与手动遍历该对象属性时的一致。

Objext.keys()

var obj = { 0: 'a', 1: 'b', 2: 'c' }; console.log(Object.keys(obj)); // console: ['0', '1', '2'] 

//题外话 

Objext.keys()

  //排序问题

var anObj = { 100: 'a', 2: 'b', 7: 'c' }; console.log(Object.keys(anObj)); // console: ['2', '7', '100']
```

