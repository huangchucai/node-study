const fs = require('fs');
const path = require('path');


module.exports = function(dirPath, suffixName, callback) {
  let _suffixName = `.${suffixName}`;
  fs.readdir(dirPath, (error,data) => {
    if(error) {
     return callback(error)
    }
    data = data.filter(name => {
      let _name = path.extname(name);
      return _name === _suffixName 
    })
    callback(error,data)
  })  
}




// 官方答案


// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }
