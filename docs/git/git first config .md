---
autoGroup-0: 

title: git 基础配置
---

##  用户名邮箱

```console
$ git config --global user.name “github’s Name”
$ git config --global user.email “github@xx.com”
$ git config --list
```





## ssh 公钥

```console
$ cd ~/.ssh
$ ls
看看有没有 id_dsa 或 id_rsa 命名的文件，

有 就直接打开id_rsa.pub  
里面的内容就是秘钥

```

没有就继续

```console
$ ssh-keygen
$cat ~/.ssh/id_rsa.pub
```

![Image](http://picgo.genji.xyz/img/image-20200302191024356.png)

### 复制这段秘钥 在github> setting >ssh and gpg keys>new ssh key

![](http://picgo.genji.xyz/img/image-20200302214603051.png)

