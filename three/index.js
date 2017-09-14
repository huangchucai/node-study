// 同步io
let fs = require('fs')
// 获取地址
let path = process.argv[2];

function readFile(path) {
  // readFileSync返回的是一个Buffer类型
  const data = fs.readFileSync(path);
  let str = data.toString();
  // 这样可以返回一个字符串
  // const data = fs.readFileSync(path, 'utf-8')
  console.log(readLine(str))
}

// const buf = Buffer.from('hello world', 'ascii');
// console.log(buf)

function readLine(str) {
  let arr = str.split('\n');
  return arr.length-1
}
readFile(path)
