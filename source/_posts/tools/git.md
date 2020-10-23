---
title: git
date: 2020 04 05
categories:
  - git

tags:
  - git
---

### 常用操作

- git stash 缓存工作区
- git stash pop 弹出缓存区
- git checkout -b develop # 检出并移动到新分支
- git fetch --all   # → 拉取所有远端的最新代码
- git merge origin/develop   # → 如果是多人协作，merge 同事的修改到当前分支（先人后己原则）
- git merge origin/master   # → 上线之前保证当前分支不落后于远端 origin/master，一定要 merge 远端 origin/master 到当前分支

#### git 全局 .config

- windows 下 `C:\Users\Administrator\.config`
- linux `/Users/admins/.gitconfig`

### 代理 git

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

#### 针对 docker 容器

`run`，加上`--net=host` 这个选项，就可以实现容器内外共享网络，然后再在容器内部配置 git config，实现容器内代理

#### 只对 github (解决 clone clone/pull 慢)

`git config --global http.https://github.com.proxy socks5://127.0.0.1:1080`

#### 取消针对 github 的代理

`git config --global --unset http.https://github.com.proxy`

```md
# [http "https://github.com"]
# proxy = socks5://127.0.0.1:2080
```

#### 一个分支强制覆盖另一个分支

> dev2 覆盖 dev

```bash
# 先切换到dev
git checkout dev

# 当前分支head 指向 dev2
git reset --hard dev2

# 本地 强制推送到 origin/dev
git push -f
```

### 合并 bbb  >  aaa

#### 单个 commit

> git cherry-pick 每次合并过来会显示文件冲突(其实并没有冲突代码部分，只需手动解决既可)

```bash

git checkout  aaa

# bbb 分支上有一次 commit 82ecb31 合并到 aaa
git cherry-pick 82ecb31
```

---

#### 一系列 commits

> 假设你需要合并 bbb 分支的 commit76cada ~62ecb3 到 aaa 分支。

```bash

git checkout bbb

# 需要基于 bbb 创建一个新的分支 newbbb，并指明新分支的最后一个commit：
git checkout -b  newbbb 62ecb3

# rebase这个新分支的commit到 aaa（--onto aaa）。   76cada^ 指明你想从哪个特定的commit开始。
git rebase --onto aaa 76cada^
```

#### 某些文件或者文件夹

1.  可选

```bash
  git checkout aaa

  # 合并  bbb  分支上f文件到feature分支上，将 bbb 分支上 f 文件追加补丁到 aaa  分支上 f文件。
  # 你可以接受或者拒绝补丁内容。
  git checkout --patch aaa f.txt
```

2. 强制

```bash
  git checkout aaa

  # 如果只是简单的将 bbb  分支的文件f.txt copy到 aaa 分支上；
  git checkout bbb f.txt
  # 合并 packages文件夹 到master
  git checkout bbb packages
```
