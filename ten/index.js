const port = process.argv[2];
const net = require('net');
const strftime = require('strftime')
// const date = new Date()
// console.log(strftime('%F %R', date))
const server = net.createServer(socket => {
  const date = new Date()
  const formatDate = strftime('%F %R', date)
  socket.end(`${formatDate}\n`)
}).on('error', (err) => {
  console.log(err)
})

server.listen(port)


// 官方答案
// var net = require('net')

// function zeroFill (i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))
