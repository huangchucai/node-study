const pathArr = process.argv.slice(2);
const http = require('http');

function setHttp(url) {
  return new Promise((resolve, reject) => {
    http.get(url,(res) => {
      let rawData = ''
      res.on('data', (chunk) => {
        rawData += chunk
      })
      res.on('error', (err) => {
        reject(err)  
      })
      res.on('end',() => {
        resolve(rawData)
      })
    })
  })
}



// [[Function], [Function]]

// 按顺序执行函数
function main() {
  let promise = Promise.resolve();
  let arrData = []
  return pathArr.reduce((memo, url) => {
    return memo.then(() => setHttp(url)).then((data) => {
      arrData.push(data)
      return arrData
    })
  },promise)
}

// 按顺序执行函数
async function main2() {
  let arrData = [];
  for(const url of pathArr) {
    const res = await setHttp(url);
    // console.log(`${res}`)
    arrData.push(res)
  }
  return arrData
} 

// 并发运行

main2().then(data => {
  data.forEach(item => {
    console.log(item);
  })
})

// main().then((arr) => {
//   arr.forEach(item => {
//     console.log(item);
//   })
// }).catch((e) => {
//   console.log(e)
// })


// 官方答案

// var http = require('http')
//   var bl = require('bl')
//   var results = []
//   var count = 0

//   function printResults () {
//     for (var i = 0; i < 3; i++) {
//       console.log(results[i])
//     }
//   }

//   function httpGet (index) {
//     http.get(process.argv[2 + index], function (response) {
//       response.pipe(bl(function (err, data) {
//         if (err) {
//           return console.error(err)
//         }

//         results[index] = data.toString()
//         count++

//         if (count === 3) {
//           printResults()
//         }
//       }))
//     })
//   }

//   for (var i = 0; i < 3; i++) {
//     httpGet(i)
//   }
