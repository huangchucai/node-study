var http = require('http');

// http.createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text-plain' });
//     response.end('Hello World\n');
// }).listen(8124);


// http.createServer(function (request, response) {
//     var body = [];

//     // console.log(request.method);
//     // console.log(request.headers);

//     request.on('data', function (chunk) {
//         body.push(chunk);
//     });

//     request.on('end', function () {
//         body = Buffer.concat(body);
//         console.log(body.toString());
//         // response.end(body.toString())
//         response.end('body.toString()')
//     });
// }).listen(8124);

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    request.on('data', function (chunk) {
        response.write(chunk);
    });

    request.on('end', function () {
        response.end();
    });
}).listen(8124);


// var options = {
//         hostname: 'www.example.com',
//         port: 80,
//         path: '/upload',
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     };

// var request = http.request(options, function (response) {});

// request.write('Hello World');
// request.end();

// http.get('http://www.example.com/', function (response) {});
