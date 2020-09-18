---
title: git
date: 2020 04 05
categories:
    - git

tags:
    - git
---

#### git 全局 .config

-   windows 下 C:\Users\Administrator\.config

#### 设置代理

```bash
git config --global http.proxy 'socks5://127.0.0.1:1080'
git config --global https.proxy 'socks5://127.0.0.1:1080'
```

#### 查看代理

```bash
git config --global --get http.proxy
git config --global --get https.proxy
```

#### 取消代理

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```

#### 针对 docker 容器的代理配置

`run`，加上`--net=host` 这个选项，就可以实现容器内外共享网络，然后再在容器内部配置 git config，实现容器内代理

#### 只对 github (解决 clone clone/pull 慢)

`git config --global http.https://github.com.proxy socks5://127.0.0.1:1080`

#### 取消针对 github 的代理

`git config --global --unset http.https://github.com.proxy`

```md
# [http "https://github.com"]

# proxy = socks5://127.0.0.1:2080
```

#### 最新版 坚果云
