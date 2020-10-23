---
title: 前端储存
date: 2020 04 06
categories:
  - stroage

tags:
  - web
updated: 2020 04 04
---

#### localStorage (string)

```js
localStorage.setItem(key, value)
localStorage.getItem(key)
localStorage.removeItem(key)
localStorage.clear()
```

#### sessionStorage (string) 关闭窗口后失效

```js
sessionStorage.setItem(key, value)
sessionStorage.getItem(key)
sessionStorage.removeItem(key)
sessionStorage.clear()
```

#### indexedDb

#### 注意回调函数中 this 指向

```js
//   1. 创建并打开一个数据库
let request = window.indexedDB.open('testdb', 1)

//  2.  成功回调
request.onsuccess = e => {
  this.db = event.target.result
}

request.onupgradeneeded = event => {
  this.db = event.target.result
  if (!this.db.objectStoreNames.contains('person')) {
    // 创建集合
    // 疑似异步
    var objectStore = this.db.createObjectStore('person', { keyPath: 'id' })
    // IDBDatabase.deleteObjectStore()

    // var objectStore = db.createObjectStore( 'person', { autoIncrement: true } );
    //添加索引
    objectStore.createIndex('id', 'id', { unique: true })
  }
}

//失败回调
request.onerror = function (event) {
  // console.log('数据库打开报错');
}

// 3.1. 使用事务操作数据表
let task = this.db.transaction(['person'], 'readwrite').objectStore('person').add({ id: 7, name: 'zhao6', age: 114, email: 'zhadan222gsan@exale.com' })
//更新 .put()
//删除.delete(key)

task.onsuccess = function (event) {
  // console.log('数据写入成功');
}
task.onerror = function (event) {
  // console.log('数据写入失败');
}

//  3.2  使用索引查找
let task = this.db.transaction(['person'], 'readwrite').objectStore('person').index('索引name').get('索引key')
//相应的回调略...

//删除数据库
var req = indexedDB.deleteDatabase(databaseName)
//相应的回调略...
```

##### service worker

```js
//   src/registerServiceWorker.js
import { register } from 'register-service-worker'
register('/sw.js', { registrationOptions: { scope: './' } })
```

```js
//    public/sw.js    vue-cli3
var self = this
self.addEventListener('install', event => {
  event.waitUntil(
    //版本 static-v1
    caches.open('static-v1').then(cache => {
      cache.addAll([
        //缓存的文件
      ])
      console.log('service worker 缓存成功!')
    }),
  )
})

self.addEventListener('activate', event => {
  console.log('Version now ready to handle')
})

self.addEventListener('fetch', event => {
  /*
   *  判断请求路径，查询是否命中cache
   *   命中则从cache返回
   */
  console.log('fetch', event.request)
})
```
