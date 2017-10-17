const fs = require('fs')
const rs = fs.createReadStream(pathname);

rs.on('data', (chunk) => {
  doSomething(chunk)
})

rs.on('end', () => {
  cleanUp()
})
