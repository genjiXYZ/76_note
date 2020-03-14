---
autoGroup-2: regex
title: 
---
### 正则

#### 世界上有两种人,

#### 一种是 不会正则,需要的时候百度,

#### 一种是 会正则,需要的时候插件

:smile:

疫情让我学会了正则

这里只写一下 我认为比较重要的 

基础这下面文章都有

##### 推荐我学习的网站 和测试正则的常用网站

b站:<https://www.bilibili.com/video/av80214387/?p=17>

github:<https://github.com/ziishaned/learn-regex/blob/master/translations/README-cn.md>

掘金文章:<https://zhuanlan.zhihu.com/p/29707385>

正则测试网站:
<https://regex101.com/>
<http://regexr.com/>




## 速查表

![030619575791_0JavaScript正则表达式迷你书1.1版_85](/Users/liulingyue/Desktop/030619575791_0JavaScript正则表达式迷你书1.1版_85.Png)

![030619575791_0JavaScript正则表达式迷你书1.1版_86](/Users/liulingyue/Desktop/030619575791_0JavaScript正则表达式迷你书1.1版_86.Png)


## 修饰符

|   修饰符 |描述      |
| ---- | ---- |
|     g |全局匹配，即找到所有匹配的，单词是 global。    |
|   i  |忽略字母大小写，单词是 ingoreCase。   |
|  m    |多行匹配，只影响 ^ 和 $，二者变成行的概念，即行开头和行结尾。单词是 multiline。  |



## 命名捕获组

``````console
 ?<name> 自定义名称  如果显示的是细节 能在groups 以对象的形式显示
``````

## 引用捕获组

````console
 \num      例如\1   \2   \3

\k<name>
````

引用已命名的捕获组

:::tip

如何判断是第一个捕获组呢

从左往右查  第一个(  就是第几个

:::



你品 细品

`````js
let string = "123dddd1234 123dddd321 "

        let reg = /(123)dddd\1/gu
        let reg1 = /(3)dddd\1/gu
        let reg2 = /(\d)dddd(\d)/g
        let reg3 = /(\d)dddd(\1)/g
   			let reg4 = /(?<num>\d)dddd\k<num>/g
        console.log(string.match(reg)) //["123dddd123"]
        console.log( string.match(reg1))///["3dddd3"]
  			console.log( string.match(reg2))//["3dddd1", "3dddd3"]
        console.log( string.match(reg3))//["3dddd3"]
 				console.log( string.match(reg4))//["3dddd3"]
`````

:::tip

如果你用的引用前面的捕获组 比如\1  那么后面的 \1  和前面的()   是对应的   

:::









## Reg - test()
#### 在字符串中查找符合正则的内容，若查找到返回true,反之返回false 
### Reg.test(string) 正则方法

在test 中最好加 ^  $ 来验证  密码 邮箱等

``````js
<input type="text" name="email">
  
  const mail = document.querySelector(`[name="email"]`)
        mail.addEventListener("keyup", e => {
            let value = e.target.value;
            let flag = /^[\w-]+@(\w+\.)+(com|cn|org|xyz)$/i.test(value)
            console.log(flag);
        })
  
``````

![image-20200306220022699](/Users/liulingyue/Library/Application Support/typora-user-images/image-20200306220022699.png)

![image-20200306220157032](/Users/liulingyue/Library/Application Support/typora-user-images/image-20200306220157032.png)


## Reg - exec()
### reg.exec(string) 正则方法
个人理解 : 逐个匹配 

逐个匹配的好处 会返回详细内容    包括 原子组 你自定义命名的组

:::warning

使用exec 的时候要 /g  否则只会在原地匹配  循环的时候容易卡死

:::

```
let str = hello word
let reg = /o/gi;

console.log(reg.exec(str));
console.log(reg.lastIndex);
console.log(reg.exec(str));
console.log(reg.lastIndex);
console.log(reg.exec(str));
console.log(reg.lastIndex);
```

![image-20200306223515987](/Users/liulingyue/Library/Application Support/typora-user-images/image-20200306223515987.png)

```js
let str = hello word
let reg = /o/gi;
let result = []
while (res = reg.exec(str)){
       result.push(res)
       }
```

:::tip

当匹配没有的是后 返回null  lastIndex 0 

:::

#### 封装一下

````
<h1>nihao </h1>
<h2>www.nihao.com</h2>
<h3>12323123</h3>

function search(string, reg) {
	let result = []
	while (res = reg.exec(string)) {
		result.push(res)
		}
	return result
}


let content = search(docunment.body.innerHTML,/<h[1-6]>(.*?)<h[1-6]>/g)
console.dir(content)
````

![image-20200306233920613](/Users/liulingyue/Library/Application Support/typora-user-images/image-20200306233920613.png)

## Str - search()
### string.search(reg)
### 返回索引  起始0  找不到返回-1


```js
let string = "hello world"
reg = /o/g
console.log(string.search(reg)) ///4
reg1 = /world/
console.log(string.search(reg1)) //6 

```
:::tip
只会返回一个开始的索引  "hello world " 有两个o 只会返回第一个索引
:::
## Str - split()

### string.split(reg,length)
### 返回数组 length 表示返回数组的长度

```js
let time  = "2020.11.11 2020-11-11 2020/11/11"
let reg = /[-\/\.]/

const data = time.split(reg)
console.log(data)//["2020", "11", "11 2020", "11", "11 2020", "11", "11"]
```


## Str - match()

### string.match(reg)

```js
let web = "https://www.nihao.com doc.genji.xyz www.cctv.com.cn http://nihao.com"
    reg = /(https?)?:?(\/\/)?((\w+\.)+(com|cn|xyz|org))/gi
console.dir(web.match(reg));
```

<img src="/Users/liulingyue/Library/Application Support/typora-user-images/image-20200307001250938.png" alt="image-20200307001250938" style="zoom: 50%;" />

``````js
取消/g  会显示细节 区别很大的 当没有匹配时，不管有无 g，都返回 null。
let web = "https://www.nihao.com doc.genji.xyz www.cctv.com.cn http://nihao.com"
    reg = /(https?)?:?(\/\/)?(?<website>(\w+\.)+(com|cn|xyz|org))/
console.dir(web.match(reg));
``````

<img src="/Users/liulingyue/Library/Application Support/typora-user-images/image-20200307001642067.png" alt="image-20200307001642067" style="zoom:50%;" />

## Str - replace() $字符 

| 属性          | 描述                            |
| ------------- | ------------------------------- |
| $1,$2,...,$99 | 匹配第 1-99 个 分组里捕获的文本 |
| $&            | 匹配到的子串文本                |
| $`            | 匹配到的子串的左边文本          |
| $'            | 匹配到的子串的右边文本          |
| $$            | 美元符号                        |

`````````js
var result = "2,3,5".replace(/(\d+),(\d+),(\d+)/, "$3=$1+$2"); console.log(result);
// => "5=2+3"
`````````

``````````````````js
var result = "2,3,5".replace(/(\d+)/g, "$&$&$&"); console.log(result);
// => "222,333,555"
``````````````````



`````js
var result = "2+3=5".replace(/=/, "$&$`$&$'$&"); console.log(result);
// => "2+3=2+3=5=5"
`````

我们对最后这个进行一下说明。要把 "2+3=5"，变成 "2+3=2+3=5=5"，其实就是想办法把 = 替换成 =2+3=5=，其中，$& 匹配的是 =， $` 匹配的是 2+3，$' 匹配的是 5。因此使用 "$&$`$&$'$&" 便达成了 目的。



## Str - matchAll()

#### 返回 一个可迭代对象:RegExpStringIterator{}

#### string.matchAll(reg)  字符串方法

:::tip

marchAll  部分低端 浏览器不支持

:::

```````js
<h1>nihao </h1>
<h2>www.nihao.com</h2>
<h3>12323123</h3>
        // })
let reg = /<h[1-6]>(.*)<\/h[1-6]>/g
const body = document.body
const hd = body.innerHTML.matchAll(reg)
 console.log(hd);
let contents = []
for (const iterator of hd) {
	console.dir(iterator)
	contents.push(iterator[1])
        }
console.log(contents)
```````

![image-20200306222300004](/Users/liulingyue/Library/Application Support/typora-user-images/image-20200306222300004.png)







