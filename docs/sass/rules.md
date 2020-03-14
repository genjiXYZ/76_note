---
sidebarDepth: 2
title: Rules
---


## @import

sass 中

@import 存在的问题

- @import 使得所有的 变量 mixin 函数 都可以全局访问 

- 因为所有的变量都变成了全局的 所以不得不将变量 加一些前缀 避免冲突 很麻烦

- @extend 也会变成全局的了 所以很难知道 到底 继承 或者 扩展了 那些样式



Sass 有和css  同样的功能

与css 不同的是 css 导入 在渲染时候需要发出多个http请求

而sass 则在编译中处理

```scss
// css 用;  分隔 

//sass  可以用,  分隔 多个导入

@import 'foundation/code.scss', 'foundation/lists.scss';
```



:::tip

在@use 中已经解决了这些问题  而且@import  在未来几年 将会被弃用

:::


##  @use(代替@import的新东西)推荐



### 引入

由于@use 解决了@import 的一些 变量变成全局的问题 所以在命名的时候可以用一些 简单的名称如

$width $radius

```scss
///  src/_corners.scss

$radius: 3p想;
@mixin rounded {
  border-radius: $radius;
}

// style.scss
@use "src/corners";

.button {
  @include corners.rounded;
  padding: 5px + corners.$radius;
}
```



是不是用  corners.rounded 这种方式有点麻烦 你

### 自定义 命名空间

你当然也可以自定义 一个名字 

```scss
// src/_corners.scss
$radius: 3px;

@mixin rounded {
  border-radius: $radius;
}
// style.scss
@use "src/corners" as c;

.button {
  @include c.rounded;
  padding: 5px + c.$radius;
}
```







### 局部变量	

```scss
// src/_corners.scss
$-radius: 3px;

@mixin rounded {
  border-radius: $-radius;
}

// style.scss
@use "src/corners";

.button {
  @include corners.rounded;

  
  // 这是错误的 $-radius 是不可访问的   除了 `_corners.scss`.
  padding: 5px + corners.$-radius;
}
```



### 模块化引用(可配置自定义参数)



```scss
// _library.scss
$black: #000 !default;
$border-radius: 0.25rem !default;
$box-shadow: 0 0.5rem 1rem rgba($black, 0.15) !default;

code {
  border-radius: $border-radius;
  box-shadow: $box-shadow;
}


// style.scss
@use 'library' with (
  $black: #222,
  $border-radius: 0.1rem
);
```



### 加载css (不建议)

支持加载css 不建议使用



```scss
// code.css
code {
  padding: .25em;
  line-height: 0;
}
// style.scss
@use 'code';
```



:::warning

你引入的css  不允许有任何sass 的功能  因此不能暴露任何Sass变量，函数或混合.

所有不是有效CSS的 Sass功能也会产生错误。

:::

## @extent

继承   就是把你要继承对象 的所有样式 附加到 所在的位置上

```scss
.error {
  border: 1px #f00;
  background-color: #fdd;

  &--serious {
    @extend .error;
    border-width: 3px;
  }
}

//to css
.error, .error--serious {
	 border: 1px #f00;
	 background-color: #fdd;
}
 .error--serious {
	 border-width: 3px;
}
 

//////////


.error:hover {
  background-color: #fee;
}

.error--serious {
  @extend .error;
  border-width: 3px;
}

//to css
.error:hover, .error--serious:hover {
	 background-color: #fee;
}
 .error--serious {
	 border-width: 3px;
}
 
```

## @if @else if @else

当 `@if` 的表达式返回值不是 `false` 或者 `null` 时，条件成立，输出 `{}` 内的代码：

```scss
p {
  @if 1 + 1 == 2 { border: 1px solid; }
  @if 5 < 3 { border: 2px dotted; }
  @if null  { border: 3px double; }
}
///p {border: 1px solid; }



$type: monster;
p {
  @if $type == dog {
    color: blue;
  } @else if $type == cat {
    color: red;
  } @else if $type == monster {
    color: green;
  } @else {
    color: black;
  }
}

///p {color: green; }
```


## nth($list,$n)


注：在 nth($list,$n) 函数中的 $n 必须是大于 0 的整数：







## @mixin @include

````scss
@mixin flex {
    display: flex;
    justify-content: center;
    align-items: center;
}

//在你想用的地方 用就好了
html{
  @include flex
    .box{
      @include flex
  } 
}

````



可以 嵌套 其他@mixin

```scss
@mixin fontsiz{
  fonsize:12rem;
}

@mixin flex {
    display: flex;
    justify-content: center;
    align-items: center;
  @include fontsiz
  
}

.box{
  @include flex
}

```

传参



### 普通传参

```scss


@mixin name ($color,$bgcolor,$fontsize){
  color:$color;
  background-color:$bgcolor;
  font-size:$fontsize;
};

//// 以下引用写法均可
//1
@include name(blue,yellw,24px);

//2 可以引用变量  也可以对应传参
$colorRed:red;
@include  name ($color:$colorRed,$bgcolor:yellow,$fontsize:24px)   //方便看

  
  
```





###  带有 默认值 传参

```scss
@mixin name ($color:blue,$bgcolor:yellow,$fontsize:24px){
  color:$color;
  background-color:$bgcolor;
  font-size:$fontsize;
};

// 没有传参的 值 会用默认值

@include name ($fontsize:100px)
  
```



### 不确定传参 (...)



```scss
@mixin box-shadow($shadows...) {
  -moz-box-shadow: $shadows;
  -webkit-box-shadow: $shadows;
  box-shadow: $shadows;
}
.shadows {
  @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
}
//编译为
.shadowed {
  -moz-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
  -webkit-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
  box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
}
```

###  用数组传参

```scss
@mixin colors($text, $background, $border) {
  color: $text;
  background-color: $background;
  border-color: $border;
}
$values: #ff0000, #00ff00, #0000ff;
.primary {
  @include colors($values...);
}

//编译为
.primary {
  color: #ff0000;
  background-color: #00ff00;
  border-color: #0000ff;
}
```



当然 你也可以嵌套 接着传参

除非mixin 里面相似度非常高   否则正写  这就是给自己找麻烦 好处就是逼格很高 

```scss
@mixin wrapped-stylish-mixin($args...) {
  font-weight: bold;
  @include stylish-mixin($args...);
}


.stylish {
  @include wrapped-stylish-mixin(#00ff00, $width: 100px);
}
```

## @content 混合自定义样式

```scss
@mixin name(){
  html{
    font-size:24px
    @content
  }
}



@include name (){
  .container{
    display:flex;
  }
}


//编译成

html{
  font-size:24px;
}
html .container{
  display:flex
}
```

:::warning

**注意：** 当 `@content` 在指令中出现过多次或者出现在循环中时，额外的代码将被导入到每一个地方。

:::

```scss
$color: white;
@mixin colors($color: blue) {
  background-color: $color;
  @content;
  border-color: $color;
}
.colors {
  @include colors { 
    color: $color; 
  } 
}
////注意这里 是{}  而不是 ()传参


//编译成

.colors {
  background-color: blue;
  color: white;
  border-color: blue;
}
```









## @mixin @include 简写





**为便于书写，`@mixin` 可以用 `=` 表示，而 `@include` 可以用 `+` 表示**，所以上面的例子可以写成：

````scss
=name(){
  color:red;
}

+name
````







## @media

```scss
.sidebar {
  width: 300px;
  @media screen and (orientation: landscape) {
    width: 500px;
  }
}

///to css

.sidebar {
  width: 300px; }
  @media screen and (orientation: landscape) {
    .sidebar {
      width: 500px; } }


```







## 输出格式

Sass 提供了四种输出格式，可以通过 `:style option` 选项设定，或者在命令行中使用 `--style` 选项。



:nested (默认)

:expanded(类似css)

:compact(每条css 占一行)

:compressed(压缩)



## 其他api  

还有很多类似构造函数似的 api   暂时我还用不上  但是我感觉 这些api 能做出来 很棒 的那种 视觉效果  或者做一些画图的东西  ps能用到  日后更新