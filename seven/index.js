const url = process.argv[2];
const http = require('http');
// http.get 关注 data  error end三个时间  
http.get(url, (res) => {
  // res => node steam
  let rawData = '';
  res.setEncoding('utf8')
  res.on('data', (chunk) => {
    console.log(chunk)
  })
  res.on('error',(error) => {
    console.error(error)
  })
  // res.on('end',() => {
    
  // })
})


// var http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)
