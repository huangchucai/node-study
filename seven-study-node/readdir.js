const fs = require('fs')
const path = require('path')
function travel(dir, callback) {
  console.log(fs.readdirSync(dir))
    fs.readdirSync(dir).forEach(function (file) {
        var pathname = path.join(dir, file);
        if (fs.statSync(pathname).isDirectory()) {
            travel(pathname, callback);
        } else {
            callback(pathname);
        }
    });
}
// console.log(__dirname)
travel(__dirname, (pathname) => {
  console.log(pathname);
})
