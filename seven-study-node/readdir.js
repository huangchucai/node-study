const fs = require('fs')
const path = require('path')

function readFile(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const pathname = path.join(dir, file);
    if(fs.statSync(pathname).isDirectory()) {
      readFile(pathname, callback);
    } else {
      callback(pathname)
    }
  })
}

readFile(__dirname, (pathname) => {
  console.log(pathname)
})  











































function travel(dir, callback) {
  // console.log(`--- dir ----`)
  // console.log(fs.readdirSync(dir))
    fs.readdirSync(dir).forEach(function (file) {
        var pathname = path.join(dir, file);
        if (fs.statSync(pathname).isDirectory()) {
            travel(pathname, callback);
        } else {
            callback(pathname);
        }
    });
}
// // console.log(__dirname)
travel(__dirname, (pathname) => {
  console.log(pathname);
})
