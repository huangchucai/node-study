const fs = require('fs');
const path = require('path')

const asyncPath = process.argv[2]
const suffix = process.argv[3]

function filterFileName(filePath) {
  return new Promise((resolve,reject) => {
      fs.readdir(filePath, (error, data) => {
        if(error) {
          reject(error)
        } else {
          resolve(data)
        }
    })
  })
}

filterFileName(asyncPath).then((data) => {
  if(Array.isArray(data)) {
    let nameArr = data.filter((fileName) => {
      let name = path.extname(fileName).replace(/\.(.*)/,($1,$2) => {
        return $2;
      })
      return name === suffix
    })
    nameArr.forEach((name) => {
      console.log(`${name}`)
    })
    return nameArr
  }
})


// 别人答案
// var fs = require('fs')
// var path = require('path')

// var folder = process.argv[2]
// var ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })
