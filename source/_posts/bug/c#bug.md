---
title: C# frameWork 链接mysql 踩坑
date: 2019 04 28
tags: C#
---

####

> 几天前刚接触这个用 VS 2017 用 C#的网站开发，需要用到 MYSQL。 连接
> MYSQL 的过程中遇到了各种各样的问题，查了很多博客，大多数都是一 些 NC 压根
> 没自己实际使用而转载的。浪费了很多时间，最后整理如下：
> 原因具体不知道，下面的版本对应可以完成

#### 需要的东西

- mysql 5.6.17

- 最新版 Visual Studio 2017 社区版

- NuGet 包管理器

- MySQL Connector/NET 6.8.8

- mysql for vs 1.2.8

- MySql.Data.Entity 6.8.8

- MySql.Data 6.8.8

- EntityFramework.zh-Hans 6.0

- EntityFramework 6.0

#### 我所遇到的问题

- 创建**ADO .Net**实体模型时没有**MYSQL**的选项 ；
- 进行**MYSQL 的数据链接**时用户权限不够，无法访问；
- 之后的 **选择数据连接** 发生闪退；
- **X6 实体框架不兼容**
- **数据源控件配置数据源**时出现未实例化对象
- **此版本的实体数据源向导不兼容**导致无法后续操作；
- ……一堆问题有的都忘记了，大概就这些。

#### 说明：

- **MYSQL5.6.17**这个应该没什么问题吧，略过
- **最新版 Visual Studio 2017 社区版** 和这个东西不知道有没有关系，前面没有更新，一直没有成功过。因为没有确定别的插件一一做测试，所以不知道是不是它的锅，原因不详。走头无路的话就更新试试吧。

- **MySQL Connector/NET 6.8.8**官网更新到后面了，但是版本高了就是不对，具体原因别问我，问就是不知道。有人说再上的版本行不行，不知道前面用了 6.9.xx。失败！
- **mysql for vs 1.2.8**是最新版的，好像没什么问题。2019/04/28
- **MySql.Data.Entity 6.8.8**
  **MySql.Data 6.8.8**
  **EntityFramework.zh-Hans 6.0**
  **EntityFramework 6.0**
  这四个东西也很重要，可以解决上面 3.4.5.6 的问题，具体不知道。**从 NuGet 安装这四个东西的时候，直接搜索 MySql.Data.Entity 安装 6.8.8 版本 它会自动安装其他附属包，最后 4 个都会完完整整安装好。别去听某些说的在哪啥控制台安装，改什么配置文件，引用啥啥 EF6.dll ！NMSL！**
- 全部过程就这样。其他的没怎么考虑，弄了几天终于成功创建并使用,真的激动惨了。

#### 附上包和驱动的图片

![注意版本和connertoe NET一致](https://img-blog.csdnimg.cn/20190428193237215.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnN0YXJz,size_16,color_FFFFFF,t_70)
![这是两个连接驱动，注意版本号](https://img-blog.csdnimg.cn/20190428193300492.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lhbnN0YXJz,size_16,color_FFFFFF,t_70)

---
