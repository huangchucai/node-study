const http = require('http');
const port = process.argv[2];

const url = require('url');

let server = http.createServer((req, res) => {
  let urlObj = url.parse(req.url);
  res.writeHead(200, { 'Content-Type': 'application/json' })
  if (urlObj.pathname === '/api/parsetime') {
    let dataObj = url.parse(urlObj.path, true).query
    let date = new Date(dataObj.iso)
    let resDate = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }
    res.end(JSON.stringify(resDate))
  }

  if (urlObj.pathname === '/api/unixtime') {
    let dataObj = url.parse(urlObj.path, true).query
    let dateStr = new Date(dataObj.iso).toISOString()
    let resDate = {
      unixtime: Date.parse(date)
    }
    res.end(JSON.stringify(resDate))
  }
})

server.listen(port)


//官方答案

// var http = require('http')
// var url = require('url')

// function parsetime(time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime(time) {
//   return { unixtime: time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//   }

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
