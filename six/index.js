const readFileFn = require('./readFile.js')
const dirPath = process.argv[2];
const suffixName = process.argv[3];

function callback(err,data) {
  if(err) {
    return console.error(err)
  }
  data.forEach(name => {
    console.log(name)
  })
}
readFileFn(dirPath, suffixName, callback)


// 官方答案

// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error('There was an error:', err)
//   }

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })
