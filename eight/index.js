const http = require('http');
const url = process.argv[2];
http.get(url, (res) => {
  let rawdata = '';
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    rawdata += chunk
  })
  res.on('error',(err) => {
    console.log(err)
  })
  res.on('end',() => {
    console.log(rawdata.length)
    console.log(rawdata)
  })
})


                                                                  
// var http = require('http')                                    
// var bl = require('bl')                                        
                                                              
// http.get(process.argv[2], function (response) {    
//   console.log(response.pipe)           
//   response.pipe(bl(function (err, data) {   
//     console.log(data)                  
//     if (err) {                                                
//       return console.error(err)                               
//     }                                                         
//     data = data.toString()                                    
//     console.log(data.length)                                  
//     console.log(data)                                         
//   }))                                                         
// })                                                            
                                                              