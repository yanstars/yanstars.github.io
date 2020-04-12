---
title: linux 相关
date: 2020 01
tags:
    - os
    - linux
categories: os
---

### 相关环境

-   docker

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

### 问题记录 1

-   使用 gitlab 测试邮件通知的时候报这个错

> sendmail: fatal: parameter inet_interfaces: no local interface >found for ::1

-   网上搜索要修改这个文件

`vim /etc/postfix/main.cf`

-   把下面两行

```
inet_interfaces = localhost
inet_protocols = all
```

-   改为

```
inet_interfaces = all
inet_protocols = all
```

-   再重启 postfix

`service postfix start`

-   查看任务日志

`vim /var/spool/mail/root`

[原文链接](https://blog.csdn.net/github_37673306/java/article/details/84755551)

### 问题记录 2

> `15 8 * * * docker run --shm-size 1G -i -t --rm -v /root/popu/index.js:/app/index.js alekzonder/puppeteer:latest`
> 定时任务 docker 启动容器报错

> 报错：the input device is not a TTY

方案: 任务启动容器命令中去掉 `-t` 参数
`15 8 * * * docker run --shm-size 1G -i --rm -v /root/popu/index.js:/app/index.js alekzonder/puppeteer:latest`

[原文链接](https://www.cnblogs.com/killall007/p/9494189.html)

-   docker 任务

`15 8 * * * docker run --shm-size 1G -i --rm -v /root/popu/index.js:/app/index.js alekzonder/puppeteer:latest`
