---
title: MONGO DB
date: 2018 08 08
categories:
  - database
tags:
  - database
updated: 2020 04 04
---

#### 使用 student 数据库

`use student`

#### 查看数据集合

`show collections`

#### 创建 students 集合

`db.createCollection("users")`

#### 向 students 插入数据

`db.students.insert({"name":"xiaoming"})`

#### 更新数据

- 更新
  `db.student.update({"score.shuxue":70},{\$set:{"age":33}});`
- 替换
  `db.student.update({"score.shuxue":70},{"age":33})`

#### 查询操作

- 删除 users 集合中的某一条
  `db.users.remove({age: 132});`
- 删除多个
  `db.restaurants.remove( { "borough": "Queens" }, { justOne: true } )`
- 删除 student 集合
  `db.student.drop()`
- 删除该数据库
  `db.dropDatabases()`

#### do

| commands                                           | 操作                 |
| -------------------------------------------------- | -------------------- |
| db.student.find({})                                | 查找所有             |
| db.student.distinct("name")                        | 去重                 |
| db.student.find({"name":"小明"})                   | 找到小明             |
| db.student.find({age:{\$gt:22}})                   | >22                  |
| db.student.find({age:{\$lt:22}})                   | <22                  |
| db.student.find({age:{\$get:22}})                  | >=22                 |
| db.student.find({age:{\$lte:22}})                  | <=22                 |
| db.userInfo.find({name: /mongo/});                 | 包含 mongo           |
| db.userInfo.find({name: /^mongo/})                 | 以 mongo 开头        |
| db.userInfo.find({}, {name: 1, age: 1})            | 包含查找             |
| db.userInfo.find().sort({age: -1});                | 以 age 降序          |
| db.userInfo.find().limit(5);                       | 查前五条             |
| db.userInfo.find().limit(10).skip(5)               | 查 5-10 条           |
| db.userInfo.find({\$or: [{age: 22}, {age: 25}]})   | 22 OR 25             |
| db.userInfo.find({age: {\$gte: 25}}).count()       | 统计个数             |
| db.userInfo.find({"RouteInfo":{"\$exists":true}})  | 某个字段存在的语句   |
| db.userInfo.find({"RouteInfo":{"\$exists":false}}) | 某个字段不存在的语句 |

---

## mongoDB

- insertOne
- insertMany
- deleteOne
- deleteMany
- updateOne
- updateMany
- find
- sort
- limit
- skip

```js
const MongoClient = require('mongodb').MongoClient
// const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017'

// Database Name
const dbName = 'admin'

MongoClient.connect(url, async (err, client) => {
	const db = client.db(dbName)
	const collection = db.collection('feserver')
	collection.find({}).toArray((error, data) => {
		if (error) console.log('err :>> ', error)
		console.log('data :>> ', data)
	})

	client.close()
})
```
