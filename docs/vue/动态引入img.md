---

autoGroup-2: 其他
title: 动态引入img

---

最近过年几天 没怎么写代码  犯了一个低级错

```js
<img :src=` ../assets/${pic}.png `  />
```

hah 动态绑定 path  要用require  

```js
<img :src="imgUrl(item.name)" alt />
    
    
    
    
methods: {
    imgUrl(name) {
		let Path =require(`../assets/characterAvatar/${name}.png`);
      return Path;
    },
     
     
```

下回再犯吃屎