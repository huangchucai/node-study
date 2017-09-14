const fs = require('fs');

let path =  process.argv[2];

function AsyncRead(path) {
  return new Promise((resolve, reject) => {
    if(!path) { 
      console.log('请填写路径')
      return 
    }
    fs.readFile(path, 'utf-8', (error,data) => {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  })
}
AsyncRead(path).then((data) => {
  console.log( data.split('\n').length -1 )
},(error) => {console.log(error)})
