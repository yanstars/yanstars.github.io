---

title: chrome-extention
date: 2020 04 15
categories:  web
tags:
    - web 
    - js 
    - chrome

---

1: 找到本地 chrome 扩展的源码位置

-   方法一 : 扩展的默认位置 : C:\Users\ {你的用户名} \AppData\Local\Google\Chrome\User Data\Default\Extensions\ {扩展 id}
-   方法二 : 使用扩展 Extension Source Locator 直接复制后打开资源管理器，自动导向目标位置

2: 下载 `chrome.adm` 并 `win + r`运行`gpedit.msc` 设置 chrome 本地策略组配置扩展白名单 [参考](https://jingyan.baidu.com/article/ce09321b7d581e2bff858f23.html)
3：文件夹内修改扩展代码
4：修改该扩展内文件夹 `_metaData` 为 `metaData`
5: 打开文件夹下的 `manifest.json` 文件,删除 "`key`" 和 "`update_url`" 两个字段
6： `chrome://extensions/`内选择该目录并打包扩展程序
7： 返回扩展源码文件夹上级目录 找到 `.crx` 的文件拖进页面安装
8: 重启浏览器并打开扩展开关 [参考](https://blog.csdn.net/qq_26891045/article/details/51200059)

###

[^_^]: # ( // TODO 热更新开发环境)
