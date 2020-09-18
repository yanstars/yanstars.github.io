---
title: centos 相关
date: 2020 01
tags:
    - os
    - linux
categories: os
---

### 相关环境

-   docker

### 目录

-   [使用 gitlab 测试邮件通知的时候报错](#问题记录1)
-   [docker 启动容器报错: the input device is not a TTY](#问题记录2)
-   [ssh 免密登录后登录仍然需要密码](#问题记录3)

### 工具

-   crontab(定时任务)

`* * * * * commond`

```bash
/sbin/service crond start
/sbin/service crond stop
/sbin/service crond restart
/sbin/service crond reload
 crontab -l；
 crontab -e；
 crontab -r
 service crond status
```

### 问题记录1

-   使用 gitlab 测试邮件通知的时候报错

> sendmail: fatal: parameter inet_interfaces: no local interface >found for ::1

-   修改这个文件

`vim /etc/postfix/main.cf`

-   把下面两行

```config
inet_interfaces = localhost
inet_protocols = all
```

-   改为

```config
inet_interfaces = all
inet_protocols = all
```

-   再重启 postfix

`service postfix start`

-   查看任务日志

`vim /var/spool/mail/root`

[原文链接](https://blog.csdn.net/github_37673306/java/article/details/84755551)

### 问题记录2

> `15 8 * * * docker run --shm-size 1G -i -t --rm -v /root/popu/index.js:/app/index.js alekzonder/puppeteer:latest`
> 定时任务 docker 启动容器报错
> 报错：the input device is not a TTY

方案: 任务启动容器命令中去掉 `-t` 参数
`15 8 * * * docker run --shm-size 1G -i --rm -v /root/popu/index.js:/app/index.js alekzonder/puppeteer:latest`

[原文链接](https://www.cnblogs.com/killall007/p/9494189.html)

-   docker 任务

`15 8 * * * docker run --shm-size 1G -i --rm -v /root/popu/index.js:/app/index.js alekzonder/puppeteer:latest`

修改目录结构

`docker run --shm-size 1G --rm -v /root/popu:/app alekzonder/puppeteer:latest node my_script.js`
`docker run --shm-size 1G --rm -v /root/mydocker/popp:/app alekzonder/puppeteer:latest node app.js`

### 问题记录 3

关于配置 ssh 免密登录后仍然需要密码的解决问题

-   sshd_config 禁用 root 账户登录

```bash
vim  /etc/ssh/sshd_config
PermitRootLogin yes #允许root 免密登录
PubkeyAuthentication yes # 允许免密登录
AuthorizedKeysFile .ssh/authorized_keys  # 密钥位置
AuthorizedPrincipalsFile none
AuthorizedKeysCommand none
AuthorizedKeysCommandUser nobody
```

-   /.ssh 权限问题

```bash
chmod 700 ~/.ssh/
chmod 600 ~/.ssh/authorized_keys
```

-   重启 ssd 服务

`service sshd restart`
