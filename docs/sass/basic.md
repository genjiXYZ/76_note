---
sidebarDepth: 2
---

# 基础

## 1. 能嵌套写css 

```scss
html{
	body{
	color:red
		}
}
///html body{color:red}
```



## 2. 声明变量
```scss
$color:red;
.box{
    color:$color;
}
```



## 3. 父选择器

````scss
a {
  font-weight: bold;
  text-decoration: none;
  &:hover { text-decoration: underline; }
  body.firefox & { font-weight: normal; }
}

//////编译成css
a {
  font-weight: bold;
  text-decoration: none; 
}
a:hover {
    text-decoration: underline; 
}
body.firefox a {
    font-weight: normal; 
}
````



`&` 必须作为选择器的第一个字符，其后可以跟随后缀生成复合的选择器，例如



```scss
#main {
  color: black;
  &-sidebar { border: 1px solid; }
}
////to css
#main {
  color: black; 
}
#main-sidebar {
    border: 1px solid;
}
```

## 4. 属性嵌套



```scss

.funky {
  font: {
    family: fantasy;
    size: 30em;
    weight: bold;
  }
}


////to css
.funky {
  font-family: fantasy;
  font-size: 30em;
  font-weight: bold; }
```



