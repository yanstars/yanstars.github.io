---
title: windows 相关
date: 2020 03
tags:
    - os
    - windows
categories: os

updated: 2020 04 14
---

-   wox
-   everything
-   git
-   sourcetree
-   node
-   nvm-forwindows
-   mobaxterm
-   vscode
-   docker
-   坚果云
-   cmder
-   pandownload
-   ApowerRECPortable
-   navicat

---

##### (win10 企业版 LTSC)

1.添加了个新用户 `visitor` 然后注销现在的用户 `root` 登陆`visitor`

2.报错:

> <font  color='red'> User Profile Service 服务未能登录，无法加载用户配置文件</font>

错了就错了，于是想着返回 root 账户就算了，然后发现我这个 在登陆界面没有 **选择其他用户** 功能 也没有**返回的箭头**

3.懵了！各种尝试:`ctrl + alt + delete` 关机 重启 win10 安全模式启动 各种办法都没用 就是显示 visitor 让你输入密码 ，不给你切换用户的机会

4.赶紧查了一下,发现很多人遇到了这个问题,没找到解决办法。但是发现了很多活跃在各种某度知道，某之家，某吧的傻(zhi)逼 (zhang)瞎子 nc 军团的到处复制粘贴回答,

> 什么 进桌面 进命令行 进注册表 进设置 进 nm 啊进 别人问题很清楚,登陆界面，还没进去。天天 xjb 复制粘贴。

5.最后找到了一个优秀大哥的解决办法,成功进来了。[源地址](https://zhidao.baidu.com/question/1770296959514572980.html)

##### 尝试

1：制作一个启动安装盘，想办法进入命令提示符界面
2：进入系统盘符，如：C:\
3：再进入 `C:\windows\system32`
4：分别键入如下命令：

`Copy sethc.exe sethc_bk.exe`
`Copy /y cmd.exe sethc.exe`
`Net user administrator xxx`（ xxx 是新密码）

> 最后一条命令时提示我的 `Net` 和系统版本不兼容，没成功,所以我自己忽略了

5：重启，进入登录界面
6：连续按 5 次 `shift` 键，在登录界面会出现命令提示符界面。
7：运行 `netplwiz`（配置组和用户界面），在用户界面启用属 `administrator` 用户

> 成功进来,看到了自己的`root`和`visitor`两个用户，但是没找到启用的方法
> 随后我尝试删除了 `visitor`用户

8：重启，输入 `administrator` 的密码 xxx 既可进入 `windows`

> 这里我还是显示`visitor`的登陆界面,再一次重复了 6,7 步骤。同时设置`root`用户免密登陆，重启！

9：系统还原到你想要的点，完成！

> 没有提示输入密码,成功回到了 `root`桌面

> 有钱了还是换个正版吧,应该之前清理电脑又把什么配置文件，注册表，系统服务啥啥的破坏了。然后在查看 User Profile Service 服务时，还发现了 2345 看图王 的服务注册信息。真是吐了，臭名昭著。

> 最后感谢这个大哥。[源地址](https://zhidao.baidu.com/question/1770296959514572980.html)
