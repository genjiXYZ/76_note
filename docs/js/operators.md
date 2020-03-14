---
title: 符号的故事
---

规律很容易找到    -(x+1)

~5=-6

~~    转换成数字并且把小数点去掉    效率比Math.floor高

!!~num     |x+1|>0?   




!null=true

!undefined=true

!''=true

!100=false

!'abc'=false


var a;
if(a!=null&&typeof(a)!=undefined&&a!=''){
    //a有内容才执行的代码  
}

if(!!a){
    //a有内容才执行的代码...  
}

就能和上面达到同样的效果。a是有实际含义的变量才执行方法，否则变量null，undefined和''空串都不会执行以下代码。

可以总结出来，“！”是逻辑与运算，并且可以与任何变量进行逻辑与将其转化为布尔值，“!!”则是逻辑与的取反运算，尤其后者在判断类型时代码简洁高效，省去了多次判断null、undefined和空字符串的冗余代码。