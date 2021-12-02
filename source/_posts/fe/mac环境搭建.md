---
title: mac环境搭建
date: 2021 12 02
categories: macos
tags:
  - macos
---

> 快速开始工具

#### [homeBrew](https://brew.sh/)

> The Missing Package Manager for macOS (or Linux)

```bash
# 需要有 git
# https://gitee.com/cunkai/HomebrewCN?_from=gitee_search

/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

###

[^_^]: # ( // TODO 热更新开发环境)

#### [oh-my-zsh ](https://github.com/ohmyzsh/ohmyzsh)

> 好用的 shell

```bash
#  install oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

#### [nvm](https://github.com/nvm-sh/nvm#troubleshooting-on-macos)

> Version Manager for node

```bash

brew install nvm

...

export NVM_DIR="$HOME/.nvm"
[ -s "$(brew --prefix)/opt/nvm/nvm.sh" ] && . "$(brew --prefix)/opt/nvm/nvm.sh" # This loads nvm
[ -s "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" ] && . "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" # This loads nvm bash_completion
```

#### [autojump](https://github.com/wting/autojump)

> 快速跳转目录

```bash
# install autojump
brew install autojump
```

#### ~/.zshrc

```
...
plugins=(
  autojump
)
...
```

#### vscode

- `command + shift + p`
- 输入 `install ....code command in path`
- `enter`
- 将`code`注册到命令行

#### example

```bash
cd /Users/admin/Desktop/code/testdir
cd /xxx/xxx/...code/dir
cd ~
j testdir   # 自动跳转到 testdir
j dir   # 自动跳转到 dir
code .  # 用vscode打开当前目录
code /Users/admin/Desktop/code/testdir  # 用vscode打开当testdir
```

> ...更多看文档
