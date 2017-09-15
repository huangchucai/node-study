const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const textPath = process.argv[3];




const server = http.createServer((req,res) => {
  let streamTxt =  fs.createReadStream(textPath);
  let rawdata = '';
  streamTxt.on('data', (chunk) => {
    rawdata += chunk
  })
  streamTxt.on('end', () => {
    res.end(rawdata)
  })
})
server.listen(port)


// 官方答案

// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))
