
const axios = require("axios")
const https = require('https')

const service = axios.create({
  timeout: 50000,
  headers: {
    token: "68FCC10D17DA063EF6F42EC3C1245B9C35072782E9E5EA590A6AC36FD5F3A86A06EE7994733E20F57E2F63C1E7F983E34650A00ED6BD7321"
  }
})



const getListTest = () => {
  return service.post('http://test-fenhao.shebao.net/api/billManager/selectCustomerPersonList', listTest)
}
const TestTest = () => {
  return service.post(`http://test-fenhao.shebao.net/api/billManager/getCustomerSocialBillData`, infoTest)
}

const infoTest = { "customerCode": "502852", "customerSummaryId": "8196450000000021145", "function": "1", "billTime": "2021-04-01" }
const listTest = { "data": { "customerCode": "502852", "billTime": "2021-04-01", "detailMonth": "", "customerSummaryId": "8196450000000021145", "function": "1", "dataSource": "", "params": "", "serviceType": "", "userId": "", "summaryType": "1" }, "pageNo": 1, "pageSize": 20, "totalCount": 100 }

const control = () => {
  total++
  console.clear()
  console.log(`调用总次数  【${total}】 ,failed   【${err}】`)
  return new Promise((aaa, bbb) => {
    Promise.all(

      [
        getlists(listTest, '/api/billManager/selectCustomerPersonList'),
        getlists(infoTest, '/api/billManager/getCustomerSocialBillData')
      ]
      // [TestTest(), getListTest()],
      // [getListTest(), TestTest()]
    ).then(res => {
      res.map(item => {
        if (item.retCode !== 1) {
          err++
          bbb(false)
        }
        return item.retCode
      })
      aaa(true)
    }).catch((cccccc) => {
      console.log(',,,,,Promise.all', cccccc)
      err++
      bbb(false)
    })
  })
}


let total = 0
let err = 0
function setTimerQueen (fn) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      await fn().then(() => { }).catch(() => { })
      resolve(setTimerQueen(fn))
    }, 333)
  })
}








const getlists = (data, api) => {
  const options = {
    hostname: 'test-fenhao.shebao.net',
    port: 443,
    path: api,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'token': "68FCC10D17DA063E696CF4B0D95387CDB2694880EC06517E431563106BAD07C1790EC03EC159C7397E2F63C1E7F983E34650A00ED6BD7321"
    }
  }
  return new Promise((resolve, rej) => {
    const req = https.request(options, res => {
      let str = ''
      res.on('data', e => {
        str += e
      })
      res.on('end', function () {
        resolve(JSON.parse(str))
      })
    })
    req.on('error', error => {
      console.error('http -----', error)
      rej()
    })
    req.write(Buffer.from(JSON.stringify(data)).toString())
    req.end()
  })
}

// control()
setTimerQueen(control)
