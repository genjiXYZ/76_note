---
title: 节流 防抖
---

# 节流 防抖

虽然知道节流和防抖是什么东西,但是一直没好好理解下.so....go

### 一些常见的触发事件:

window resize scroll

mousedown mousemove

keyup keydown

等等
### 场景 

#### 个人感觉 节流就是防抖的加强版  至于如何应用 还是根据需求或者优化程度来么 

手机号  邮箱验证

联想输入(请求ajax axios 等)   节流防抖都行

高频点击 触发按钮

滚动加载(懒加载  刷新等)

## debounce

#### 防抖 :  当你触发一个事件,n秒后才执行,在这n秒内, 如果你又触发了会刷新着n秒 ,也就是最后触发  n秒后才执行

:::tip
:smiley:
玩过游戏的都知道,这就相当于释放一个需要前摇的技能(取消不进入 cd ),在施法的过程中,再次施法,只会重新计算施法时间,而不会 释放技能.
:::

### 普通版

```js
var num = 0 

function add(){
  div.innerHTML = num++
}

function debounce(func, wait) {
    var timeout;

    return function () {
        var that = this;
        var args = arguments;

        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(that, args)
        }, wait);
    }
}

//当然你可以用箭头函数
//function debounce(func, wait) {
//    var timeout;
//    return function () {
//        clearTimeout(timeout)
//        timeout = setTimeout(()=>{
//          func.apply(this,arguments)
//        }, wait);
//    }
//}
 

something.onmousemove = debounce (add,1000)

```

:::tip

apply 或者call    改变this 指向     arguments  修复 提供事件event 

:::



### 立即执行版本(第一次立刻执行 之后防抖执行)

这个需求想想还是有点道理的 .

```js
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this;
        var args = arguments;
        if (timeout) clearTimeout(timeout);
        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timeout;
            timeout = setTimeout(function(){
                timeout = null;
            }, wait)
            if (callNow) func.apply(context, args)
        }
        else {
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
    }
}
```



requsetAnimationFrame

`````js
function debounce(func) {
    var t;
    return function () {
        cancelAnimationFrame(t)
        t = requestAnimationFrame(func);
    }
}
`````






























## throttle

