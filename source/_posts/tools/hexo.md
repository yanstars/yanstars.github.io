---
title: 初试hexo
date: 2020 04 01
categories:
  - hexo

tags:
  - hexo
updated: 2020 04 04
---

#### [HEXO document](https://hexo.io/zh-cn/do)

#### 相关环境

- node
- git

#### 安装 hexo

`$ cnpm i hexo-cli -g`

#### 创建项目

`$ hexo init blogname`
`$ cd blogname`

#### 指定端口启动服务 默认 4000

`$ hexo server` 或
`$ npm run server` 或
`$ hexo server -p <port>`

---

#### 安装主题 diaspora

`$ cd blogname`
`$ git clone https://github.com/Fechin/hexo-theme-diaspora.git themes/diaspora`

#### 配置使用主题 diaspora

- `$ cd blogname`
- `$ vi _config.yml`
- 修改 hexo 全局配置 `theme: diaspora`

---

#### 创建搜索页

- 安装搜索插件
  `$ cnpm install hexo-generator-searchdb --save`

- 配置 hexo 全局配置文件

  ```md
  ... (省略部分)
  search:
  path: search.xml
  field: post
  format: html
  limit: 10000
  ...
  ```

  > <font size= 2 color=#aaaaaa> 备注 </font> >
  > <font size= 2  color=#aaaaaa> 官方说的安装插件后会自动生成`search.xml`文件，然后需要放在`hexo`的根目录 ，主题插件才会生效 </font> > <font size= 2 color=#aaaaaa >我这里安装后并没有该文件，然后直接 `copy`
  > 配置到`exo`全局配置里，也生效了！ </font>

- 新建 search 页面
  `$ hexo new page search`
- 编辑新建的页面设置类型为 serach

  ```md
      ---
      title: search
      date: 2014-12-22 12:39:04
      type: "search"
      ---
  ```

- 修改 /theme/diaspora/\_config.yml

  ```markdowm
  #本地搜索,请将索引文件放在网站根目录
  local_search:
      #是否启用
      enable: true
  ```

  > <font size=2 color=#aaaaaa>这里我也没找到索引文件,直接使用上述配置。</font>

---

#### 创建标签页

- `$ hexo new page tags`
- 修改新建的页面类型为 tags

  ```md
      ---
      title: tags
      type: "tags"
      ---
  ```

_更多 [hexo-theme-diaspora](https://github.com/Fechin/hexo-theme-diaspora) 配置_

_更多[hexo](https://hexo.io/zh-cn/docs/configuration)配置_

<font size=2 color=#aaaaaa></font>
