---
sidebarDepth: 2
title: 循环
---

## @for  from  to 

#### for $var from `<start>` to `<end>`

#### `$var` 可以是任何变量，比如 `$i`；`` 和 `` 必须是整数值。

$var  我一般写成常见的 $i

官方例子

```scss
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}

///编译成
.item-1 {
  width: 2em; }
.item-2 {
  width: 4em; }
.item-3 {
  width: 6em; }
```

```scss
///html
ul class="nameList"
	li
	li	
	li
/ul

/////scss

$com:#ED9616;
$mec:#55A8BD;
$eng:#5FE286;
$hut:#D33D3D;
$mage:#F7C1FD;
$tool:#D3C44F;

$colorlist:($com,
    $mec,
    $eng,
    $hut,
    $mage,
    $tool);


@for $i from 1 through length($colorlist)+1 {
    .nameList {
      li{
        &:nth-child(#{$i}) {
            &:hover {
                background-color: nth($colorlist, $i);
            }
        }
      }
    }
}
```

:::tip

在 sass 中 from后的数值，即循环开始的i值不能为0，这是语法规定的。

for循环从`i = 1`开始，但并不是在`i = length($colorList)`时结束，我们本来是需要循环6次，但如果我们写成`to length($colorList)`的话，只会循环5次，因此是`to length($colorList)+1`。

需要注意的地方  #{} 的用法

:::


## @for from  through 

#### @for $var from `<start>`through `<end>`

```scss
@for $i from 1 through length($colorlist){
  do something
}
```

 :::tip

through 表示包括 end 这个数，=> []

而 to 则不包括 end 这个数,=>[)

就是个区间范围的区别
:::




## @each

``````scss
$com:#ED9616;
$mec:#55A8BD;
$eng:#5FE286;
$hut:#D33D3D;
$mage:#F7C1FD;
$tool:#D3C44F;

$colorlist2:(
    1: $com,
    2: $mec,
    3: $eng,
    4: $hut,
    5: $mage,
    6: $tool);

@each $color,$i in $colorlist2{
    .nameList {
        &:nth-child(#{$color
        }){
            background-color: $i;
        }
    }
}
``````


## @each 动态引入



```scss
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}
```



### 多参数动态引入



```scss
@each $animal, $color, $cursor in (puma, black, default),
                                  (sea-slug, blue, pointer),
                                  (egret, white, move) {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
    border: 2px solid $color;
    cursor: $cursor;
  }
}
```


## @while

#### while 可以做很多 for  不能做的事情 比如 li  background 单数 偶数不同颜色 

```scss
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}

//编译成
.item-6 {
  width: 12em; }

.item-4 {
  width: 8em; }

.item-2 {
  width: 4em; }
