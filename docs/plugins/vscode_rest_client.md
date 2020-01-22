---
autoGroup-2: vscode plugins 
title: Rest client
---

###  REST Client

####  这是一款可以 代替postman的插件 只在vscode 安装插件即可

####  用法  这里只记录了最简单的用法 更多用法详见

[https://github.com/Huachao/vscode-restclient](https://github.com/Huachao/vscode-restclient)



1. 在根目录创建 .http 文件

2. 语法很简单 直接上代码 

   

   ```js
    @ 表示声明 
    {{}} 表示引用  
    ### 相当于分割线 必须要有  
    {{json}} 后一定要空一行  再写数据  
   ```
```
   @url = http://localhost:3001/api
   
   @json = Content-Type: application/json
   ###
   
   get {{url}}/users
   
   ###注册
   post {{url}}/register
   {{json}}
   
   {   
       "username":"123456",
       "password":"123456"
   }
   
   ###登陆
   post {{url}}/login
   {{json}}
   
   {   
       "username":"123456",
       "password":"123456"
   }
   
   ###个人信息
   get {{url}}/profile
   Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMTZiMDViMDkzMTMwNGI0MDllYzc0NyIsImlhdCI6MTU3ODU0NjA4M30.2ghPjDjKe0vJWjBAnBXp8hfvGjwcO6Yf_DxZVJumEJo
```



