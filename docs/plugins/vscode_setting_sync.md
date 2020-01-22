---
autoGroup-2: vscode plugins 
title: setting sync

---

###  setting sync

####  这是一款可以同步你 vscode  已经安装的插件 和 设置   

官方原话简介 

### Synchronize settings, snippets, themes, icons, launch, keybindings, workspaces and extensions across machines using GitHub Gist.



首先在vscode 安装插件 setting sync

![Image](http://pic.genji.xyz/images/2020/01/18/vscode-_setting_sync275ef3ecb6edaac0.png)



login with github

![Image](http://pic.genji.xyz/images/2020/01/18/image-20200118183408539.png)

因为我以前保存过,所以有数据 , 可以选择 想要同步的 gist   这里我选择skip   新建

![Image](http://pic.genji.xyz/images/2020/01/18/image-20200118183710539.png)

我们需要在 github  上 创建 令牌 token    

注意 :左边的 gist Id   和 右边的  获取令牌 不是一个东西 

左边的是第一次上传后会生成    也就是相当于文件名 每次不同上传都会有不同id  然后通过id 下载同步 不同时间的配置

id  可在github > 头像左键 your gist > 打开文件 >revisions 中看到  

 右边的  就是github 生成的 token  

第一次上传 不用输入 gist id    只需要 输入token 即可

![Image](http://pic.genji.xyz/images/2020/01/18/image-20200118184058869.png)

在github setting  开发者 设置中  创建一个新的token 

并在选项中勾选 gist

![Image](http://pic.genji.xyz/images/2020/01/18/image-20200118184119920.png)

![Image](http://pic.genji.xyz/images/2020/01/18/image-20200118184222837.png)

![image-20200118184303561.png](http://pic.genji.xyz/images/2020/01/18/image-20200118184303561.png)

然后会给你一串 token   存好  以后看不到了就   

 Upload Key : Shift + Alt + U

上传 即可   在最下面状态栏 会显示 进程  

如果现实 无效 token     请重启 vscode  或者 ctrl + shift + P   重置      重新 输入 获取令牌 
![image-20200118204943256.md.png](http://pic.genji.xyz/images/2020/01/18/image-20200118204943256.png)
成功 后会显示 gist  id  

可以用其他设备 同步此gist id 的配置

也可以同步之前的gist id

![image-20200118205122882.png](http://pic.genji.xyz/images/2020/01/18/image-20200118205122882.png)