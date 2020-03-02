---
autoGroup-0: 

title: git clone 慢? 民工三连!​
---

### git clone 慢? 民工三连!​ :wink:

## 第一招 修改hosts

查下面两个网站的ip

##### github.global.ssl.fastly.Net 

##### github.com 

打开/etc/hosts   添加到后面  

```js
github.global.ssl.fastly.Net 199.232.69.194
github.com 140.82.114.4
```

**刷新DNS缓存**

Linux：

sudo /etc/init.d/networking restart

**Windows**：

ipconfig /flushdns

**Mac**：

sudo killall -HUP mDNSResponder

 

重启是万能的



## 第二招 设置git config 走代理 (当然需要 富强上网)

#### 方式1: git config 全局代理

当然这种方式 有不足的地方 就是 如果你有国内的仓库 如coding  当你连接的是后也会走代理 所以看方式2

```js
git config --global http.proxy http://127.0.0.1:1080
git config --global https.proxy https://127.0.0.1:1080
```

#### 方式2 git config 对github 设置代理 

### 设置http/https代理

```js
git config --global http.https://github.com.proxy https://127.0.0.1:1087
git config --global https.https://github.com.proxy https://127.0.0.1:1087

////端口号 视自己代理而定  mac 代理http 默认1087 
```

### 设置Socks5 代理

```js
git config --global http.https://github.com.proxy socks5://127.0.0.1:1086
git config --global https.https://github.com.proxy socks5://127.0.0.1:1086

////端口号 视自己代理而定  mac 代理http 默认1086
```

可能用到的命令

```js
查看设置:    
git  config -l

恢复默认代理设置:
git config --global --unset http.proxy
git config --global --unset https.proxy
```



## 第三招 修改.ssh/config  文件



```js
vi ~/.ssh/config
Host github.com
  ProxyCommand nc -v -x 127.0.0.1:1086 %h %p
然后:wq保存退出，现在可以看结果了。
```





经过测试 这三个招 都在不同程度上 提高了 git clone 速度  

但是  后两种 取决于你代理 快不快  

实测: 一条  v2ry 中转香港线路  10m/s       

​            直连  垃圾线路 600kb/s  (但是小的文件 这速度也就够用了)



### 其实还有第四招

用国内的库  clone  github     然后你clone  国内的库  



都设置好了也不麻烦 就是没有那么直接   不过是真的快!
