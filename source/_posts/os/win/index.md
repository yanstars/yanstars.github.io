---
title: windows环境
date: 2020 04 15
categories: os
tags:
    - os
    - windows
---

-   wox
-   everything
-   git
-   sourcetree
-   nvm-forwindows
-   mobaxterm
-   vscode
-   docker
-   坚果云
-   cmder
-   ApowerRECPortable
-   navicat

## 目录

-   [win10-企业版-LTSC 无法切换用户](#win10-企业版-LTSC无法切换用户)
-   [科学上网-chromeGo](#科学上网-chromeGo)

##### win10-企业版-LTSC-无法切换用户

1.添加了个新用户 `visitor` 然后注销现在的用户 `root` 登陆`visitor`

2.报错:

> <font  color='red'> User Profile Service 服务未能登录，无法加载用户配置文件</font>

错了就错了，于是想着返回 root 账户就算了，然后发现我这个 在登陆界面没有 **选择其他用户** 功能 也没有**返回的箭头**

3.懵了！各种尝试:`ctrl + alt + delete` 关机 重启 win10 安全模式启动 各种办法都没用 就是显示 visitor 让你输入密码 ，不给你切换用户的机会

4.赶紧查了一下,发现很多人遇到了这个问题,没找到解决办法。但是发现了很多活跃在各种某度知道，某之家，某吧的傻(zhi)逼 (zhang)瞎子 nc 军团的到处复制粘贴回答,

> 什么 进桌面 进命令行 进注册表 进设置 进 nm 啊进 别人问题很清楚,登陆界面，还没进去。天天 xjb 复制粘贴。

5.最后找到了一个优秀大哥的解决办法,成功进来了。[源地址](https://zhidao.baidu.com/question/1770296959514572980.html)

###### 尝试

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

#### 关于 win10 中 vscode 远程开发 ssh 连接 远程主机的遇到的问题

首先说会遇到的问题 :

-   问题 1:`Bad owener or permission on ..`
-   问题 2: `"WARNING: UNPROTECTED PRIVATE KEY FILE!"`
-   问题 3: 在 `vscode` 终端提示 管道符写入失败

先说 问题 1 和 问题 2 。

-   `vscode` 远程开发时 会使用优先 windows 自带的 `openssh` 向远程主机 `ssh` 进行连接。
-   而连接的主机 名称 ip 配置信息都默认保存在 user/.ssh/config 这个文件中
-   原因就是 `openssh` 在读写 user/.ssh/config 这个文件时，发生了文件的权限问题。导致 `openssh` 读取 config 配置信息失败，所以连接自然就失败了。
-   同样， 在 win10 cmd 和 `powershell` 中 ，运行 `ssh` 时，系统优先会使用 `openssh` 这个工具而不是 git 自带的 `ssh` 工具。所以也会出现`Bad owener or permission on ..`的问题。所以在 cmd 和
    `powershell` 中 ，你同样会连接失败。
-   所以，归根结底就是 `openssh` 的问题。

那么针对 `vscode` 远程开发 连接失败的问题, 解决办法就有多种了.

-   Q1.既然 `vscode` 默认使用 `openssh` 进行连接。 而使用系统自带的 `openssh` 又会出现问题。那 `vscode` 中咱就不用 `openssh`

> A1： 让 `vscode` 远程开发插件不使用 win 系统默认的 `ssh` 工具(`openssh`)，修改 `vscode` 插件 remote 的配置信息 remote ssh：path 为 git 的 `ssh` 目录。这样的话 `vscode` 可以进行远程连接。 git 可以远程连接 。但是使用 cmd ，`powershell` 连接时同样会出现 <font color=red>问题 1 </font>的情况。

-   Q2.如果 vscode 仍要使用默认的 `openssh` 进行连接，上面说到了 ，`vscode` 在使用 `openssh` 连接时默认使用配置文件/user/.ssh/config。然而问题就出在了这个文件。那咱就不用这个文件。

> A2：细心的人已经发现了，在 `vscode`中,选择配置文件时，有三个选项。【/user/.ssh/config】, 【c:/programData/ssh/config】(备注，这个文件在系统 c 盘中可能会不存在), 【用户自定义一个文件】。 修改 `vscode` 中插件 remote 的配置 remote ssh：config file 为 c:/programData/ssh/config。 这样 `vscode`中可以连接成功。但是 win10 中 cmd 和 `powershell` 不能连接。

-   Q3.修改 win10 系统的默认 `ssh` 连接工具为 git 的 `ssh` 工具。(区别 Q1- Q1 是在 `vscode` 中修改 `vscode` 默认 `ssh` 连接工具，配置完成后，`vscode` 可以连接，但是 win10 中 cmd 和 `powershell` 不能连接。

> A3： 具体办法我也没有尝试。按大致思路就是修改环境变量 path 。具体办法应该是把 git 下 `ssh` 放在 用户环境变量中 PATH 中 第一行。让其高于 ope`ssh`。默认优先级 同级目录前面高于后面，不同级目录中子目录高于父级。好像是。。可以试试吧，不行的话再同时配置一份 `vscode` ssh/config 文件。

[^_^]: # ( // TODO 有时间试试 Q3 )

-   Q4. 针对 <font color=red> 问题 2</font> 的解决办法 。csdn 上好多都把这个问题解决办法粘贴到 <font color=red> 问题 1</font>上。不知道咋想的。

> 具体参考 vscode 官网 。 远程开发插件 ssh 权限错误修复问题。[\_fixing-ssh-file-permission-errors](https://code.visualstudio.com/docs/remote/troubleshooting#_fixing-ssh-file-permission-errors)

##### 反正 win10 这个`openssh` 挺坑的。选择重装的话去 github 找找 `openssh` 然后安装后，记得配置环境变量

##### 个人肯定希望 vscode 和 cmd / powershell 都能使用 openssh 目前我的解决办法 即 A2 + sss

-   sss: 删掉 /user/.ssh/config 文件
-   /user/.ssh/config 粘贴到 c:programData/ssh/config
-   设置 vscode remote ssh: config file 为 c:programData/ssh/config 这样 vscode cmd 都能成功使用 openssh 工具。

#### 科学上网-chromeGo

-   0. 首先这是个死循环。 `github` 上 `chromego` 没有科学过的话，是很难完整下载下来使用的。

-   1. `https://d37du0a4tqdc0g.cloudfront.net/` 下载这个 `Lantern` 安装好运行，然后每个月就能使用 500M 的高速流量。
-   2. 打开 `github` 搜索 `fanqiang` 找到 `star` 的一个。 下载压缩包。 解压。阅读使用文档。
