# nuc8i5 黑苹果 简单记录 :apple:

## 工具

U盘 3.0 16g  (毕竟3.0 快一点是一点)

主机 显示器 键盘 鼠标 (别用蓝牙的 就usb硬连)

## 镜像 

[简书 豪客888大神的维护镜像](https://www.jianshu.com/p/2b8516276147)

NUC8专用镜像，无需替换clover，只需要用balenaEtcher这个软件将镜像写入U盘即可用来安装

## 安装步骤

参考 [Gmf安装教程](https://www.jianshu.com/p/ebd6054d4799)



挂在efi 的时候可以不用他说的命令行方法

用u盘中的Clover Configgurater  挂载 系统efi  u盘efi 即可

然后用u盘clover 复制到 系统clover



## 三码 替换

如果你不用iCloud 就不用管了

详情见

[简书 豪客888大神的维护镜像](https://www.jianshu.com/p/2b8516276147)



:::tip

这里说一下 要备份之前的config.plist 文件 后续升级系统有用

:::

## intel 板载蓝牙

这是远景大神 2020元旦更新的驱动 

之前要么就是装 苹果原装的网卡

要么买 usb 蓝牙 

### 大神的驱动

Github下载地址:<https://github.com/zxystd/IntelBluetoothFirmware>



替换到EFI>clover>kext>other 





## hidpi
```console
sudo defaults write /Library/Preferences/com.apple.windowserver.plist DisplayResolutionEnabled -bool true
```

选择缓冲帧>选择你屏幕分辨率> +> 导出

<img src="http://picgo.genji.xyz/img/WX20200303-025525@2x.png" alt="WX20200303-024846@2x" style="zoom:33%;" />



会出现这5个文件夹  有用的三个如下

<img src="http://picgo.genji.xyz/img/WX20200303-030626@2x.png" alt="WX20200303-025525@2x" style="zoom: 33%;" />

将icons.plist 和文件夹DisplayVendorID-XXX 复制到

/System/Library/Displays/Contents/Resources/Overrides
不让复制运行 

```console
sudo mount -uw /
killall Finder
````

更多详情参见<https://www.bilibili.com/video/av71415975/> 视频中方式二

挂载EFI

kext 文件放到efI>clover>kext>other       



安装 RDM 分辨率选择工具

github:<https://github.com/avibrazil/RDM>

下载地址:<http://avi.alkalay.net/software/RDM/>

安装后重启

如果成功了会出现小闪电图形:

<img src="http://picgo.genji.xyz/img/WX20200303-024846@2x.png" alt="WX20200303-030626@2x" style="zoom: 25%;" />

## 软件

#### 安装 Xcode(环境省事)

#### 包管理工具:Homebrew (设置国内源)

#### ##### 用brew install node     还有yarn

#####  nrm yrm

#### 浏览器: Safari Chrome

#### 聊天:QQ 微信(小助手版本)

[WeChatExtension-ForMac](https://github.com/MustangYM/WeChatExtension-ForMac)

#### 文明富强上网工具:  

都在还在更新

Github:<https://github.com/paradiseduo/ShadowsocksX-NG-R8> 

​			<https://github.com/yanue/V2rayU> 

​			<https://github.com/yichengchen/clashX>

#### 编程 :

vscode 

postman 

fork T

ypora

TinyPNG4mac

#### 实用工具:

密码管理:1password 

右键扩展:超级右键 

搜索:Alfred 4 

顶栏:Bartender 

取色:Pikka 

图床上传工具:PicGo 

硬盘识别:NTFS for mac 

窗口管理:Magnet MissionControlPlus

压缩:Keka 

视频:IINA  

机械键盘打字声:Tickeys  

平滑滚动:Mos

 #### 下载/云/同步

百度网盘 

坚果云 

迅雷6.6.6 

Motrix 

