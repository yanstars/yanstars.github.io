---
title: vscode相关配置
date: 2020-09-15
tags: tools
---

## vscode

#### extensions

```json
{
	"recommendations": [
		"aaron-bond.better-comments",
		"abusaidm.html-snippets",
		"bierner.color-info",
		"christian-kohler.path-intellisense",
		"coenraads.bracket-pair-colorizer-2",
		"davidanson.vscode-markdownlint",
		"dbaeumer.vscode-eslint",
		"dotcypress.console-log",
		"dzannotti.vscode-babel-coloring",
		"eamodio.gitlens",
		"emmanuelbeziat.vscode-great-icons",
		"eriklynd.json-tools",
		"esbenp.prettier-vscode",
		"formulahendry.code-runner",
		"gruntfuggly.todo-tree",
		"hollowtree.vue-snippets",
		"hookyqr.beautify",
		"leetcode.vscode-leetcode",
		"ms-azuretools.vscode-docker",
		"ms-ceintl.vscode-language-pack-zh-hans",
		"ms-vscode.js-debug",
		"ms-vscode.js-debug-companion",
		"ms-vscode.js-debug-nightly",
		"ms-vscode.node-debug",
		"ms-vscode.node-debug2",
		"ms-vscode.references-view",
		"ms-vscode.vscode-js-profile-table",
		"msjsdiag.debugger-for-chrome",
		"octref.vetur",
		"pkief.material-icon-theme",
		"pranaygp.vscode-css-peek",
		"ritwickdey.liveserver",
		"sdras.vue-vscode-snippets",
		"shan.code-settings-sync",
		"shd101wyy.markdown-preview-enhanced",
		"streetsidesoftware.code-spell-checker",
		"techer.open-in-browser",
		"tomoki1207.pdf",
		"vincaslt.highlight-matching-tag",
		"vscode-icons-team.vscode-icons",
		"wallabyjs.quokka-vscode",
		"wayou.vscode-todo-highlight",
		"xabikos.javascriptsnippets",
		"zhuangtongfa.material-theme"
	]
}
```

#### settings

```json
{
	//编辑器的配置
	"editor.tabSize": 2, // 编辑器tab尺寸
	"editor.defaultFormatter": "octref.vetur",
	"diffEditor.ignoreTrimWhitespace": true, // 控制差异编辑器是否将对前导空格或尾随空格的更改显示为差异
	"editor.trimAutoWhitespace": true, // 删除尾随自动插入的空格
	"javascript.format.semicolons": "remove", //移除js语句分号
	"typescript.format.semicolons": "remove", //移除ts语句分号
	"typescript.format.insertSpaceBeforeFunctionParenthesis": true, //函数括号加空格
	"javascript.format.insertSpaceBeforeFunctionParenthesis": true, //函数括号加空格
	"files.autoSave": "onFocusChange", // 失去焦点时保存
	"editor.formatOnSave": false, // 保存时格式化
	//prettier的配置
	"prettier.semi": false, //不使用分号结尾
	"prettier.tabWidth": 2, //tab宽度2
	"prettier.useTabs": true, // 缩进使用tab，不使用空格
	"prettier.trailingComma": "all", //是否添加尾随逗号
	"prettier.printWidth": 160, //最大换行值
	"prettier.singleQuote": true, //使用单引号
	//vetur的配置
	"vetur.validation.template": false, //不走校验规则
	// "vetur.format.options.useTabs": true,//使用tab缩进
	"vetur.format.scriptInitialIndent": true, //script下一行缩进
	"vetur.format.styleInitialIndent": true, //style下一行缩进
	"vetur.format.defaultFormatter.html": "js-beautify-html",
	"vetur.format.defaultFormatter.css": "prettier",
	"vetur.format.defaultFormatter.js": "vscode-typescript",
	"vetur.format.defaultFormatter.postcss": "prettier",
	"vetur.format.defaultFormatter.scss": "prettier",
	"vetur.format.defaultFormatter.less": "prettier",
	"vetur.format.defaultFormatter.stylus": "stylus-supremacy",
	"vetur.format.defaultFormatter.ts": "prettier",
	"vetur.format.defaultFormatter.sass": "sass-formatter",
	"vetur.format.defaultFormatterOptions": {
		"js-beautify-html": {
			"wrap_line_length": 0,
			"wrap_attributes": "force-aligned",
			"end_with_newline": false
		}
	},
	//文件格式化工具配置
	"[javascript]": {
		"editor.defaultFormatter": "vscode.typescript-language-features"
	},
	"[typescript]": {
		"editor.defaultFormatter": "vscode.typescript-language-features"
	},
	"[markdown]": {
		"editor.tabSize": 2,
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[vue]": {
		"editor.defaultFormatter": "octref.vetur"
	},
	"[jsonc]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[scss]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[css]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[html]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[json]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"leetcode.endpoint": "leetcode-cn",
	"sonarlint.connectedMode.connections.sonarqube": [
		{
			"serverUrl": "http://sonar.shebao.net",
			"token": "fe0dfa9c9d39bf4d22a1ec333fba6f3c54c1d20b"
		}
	],
	"sonarlint.connectedMode.project": {
		"projectKey": "frontend-vue-wo.shebao.net"
	},
	"sonarlint.ls.javaHome": "/Users/mengqingtao/.vscode/extensions/sonarsource.sonarlint_managed-jre/jre/jdk-11.0.8+10-jre/Contents/Home"
}
```

### Step

1. 终端进入项目根目录
2. ```bash
   mkdir .vscode && curl https://raw.githubusercontent.com/yanstars/vscode-setting/master/.vscode/global_settings.json --output .vscode/settings.json && curl https://raw.githubusercontent.com/yanstars/vscode-setting/master/.vscode/extensions.json --output .vscode/extensions.json
   ```
3. `vscode`内调出命令面板 `ctrl +command +p`
4. 输入 `重新加载窗口`
5. 重复步骤 `3`
6. 输入：`扩展 推荐的扩展`
7. 左侧扩展栏 , 找到工作区推荐,点击右侧不远处的 `一键下载`
8. 重复步骤 `3` `4`
