const port = process.argv[2];
const http = require('http');
const map = require('through2-map');

console.log(port)

// get和post的请求体获得
// https://yxyuxuan.github.io/2016/10/24/Node-js%E4%B8%AD%E7%9A%84GET-POST%E8%AF%B7%E6%B1%82/

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res)
  }
})

// 第二种解法

// const server = http.createServer((req, res) => {
//   var postData = '';
//   req.on('data', chunk => {
//     postData += chunk
//   })
//   req.on('end', () => {
//     if(req.method === 'POST') {
//       res.end(postData.toUpperCase(), 'utf8')
//     }
//   })
// })



server.listen(port)

// 官方答案

// var http = require('http')
// var map = require('through2-map')

// var server = http.createServer(function (req, res) {
//   if (req.method !== 'POST') {
//     return res.end('send me a POST\n')
//   }

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))
