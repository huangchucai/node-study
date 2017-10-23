const path = require('path');
const fs = require('fs');

function asyncRead(dir, callback) {
  fs.readdir(dir, (err, files) => {
    files.forEach(file => {
      const pathname = path.join(dir, file)
      fs.stat(pathname, (err, stats) => {
        if(stats.isDirectory()) {
          asyncRead(pathname, callback)
        } else {
          callback(pathname)
        }
      })
    })
  })
}

asyncRead(__dirname , (pathname) => {
  console.log(pathname)
})
