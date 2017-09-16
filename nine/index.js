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



main().then((arr) => {
  arr.forEach(item => {
    console.log(item);
  })
}).catch((e) => {
  console.log(e)
})
