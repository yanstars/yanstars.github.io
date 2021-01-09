---
title: macos环境相关
date: 2020-09-04
tags: os
---
### mac os

- zsh
- wget
- brew
- nvm
- docker
- yabai
- skhd

### 网络端口信息

```
lsof -n -P -i TCP -s TCP:LISTEN | grep 8888
netstat -nat | grep 8888
```
