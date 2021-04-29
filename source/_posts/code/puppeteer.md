---
title: puppeteer
date: 2020 04
tags:
  - Node
  - js
  - puppeteer
categories: Node
---

###

```js
;(async () => {
  const os = require('os')
  const platform = os.platform()
  const puppeteer = require('puppeteer')
  const fs = require('fs')
  const data = JSON.parse(fs.readFileSync('./data.json'))
  const dataArr = Object.values(data)

  function checktOs(str) {
    //操作系统类型,返回值有'darwin', 'freebsd', 'linux', 'sunos' , 'win32'
    return platform === str
  }
  //  发送任务

  await dataArr.reduce(async (pre, now) => {
    await pre
    return worker(now)
  }, Promise.resolve())

  // for await (let item of dataArr) {
  //   await worker(item)
  // }

  async function worker(model) {
    let arg = typeOs('win32') ? { headless: false, slowMo: 300 } : { args: ['--no-sandbox', '--disable-setuid-sandbox'] }
    const browser = await puppeteer.launch(arg)
    const page = await browser.newPage()
    await page.goto(model.url)
    await page.evaluate(model => {
      document.querySelector('#q1').innerText = model.detail
      document.querySelector('#q2').innerText = model.name
      document.querySelector('#q3').innerText = model.num
      model.ans.forEach((item, index) => {
        if (!item) return
        document.querySelector(`#divquestion${index} ul`).children[item - 1].click()
      })
    }, model)
    const submit = await page.$('#submit_button')
    // 判断是否 跳转到校验页面
    //  ...
    // ...
    // 重试
    await submit.click({ delay: 200 })
    await browser.close()
    return true
  }
})()
```
