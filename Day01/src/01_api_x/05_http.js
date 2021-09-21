const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((request, response) => {
    // // response 原型链
    // console.log('response ProtoChain：', getProtoChain(response));
    // // request 原型链
    // console.log('request ProtoChain：', getProtoChain(request));
    // response.end('221');

    const { url, method, headers } = request;

    if (url === "/" && method === "GET") {
        fs.readFile('./1.html', (err, data) => {
            if (err) {
                response.writeHead(500, "500 Error", {
                    'Content-Type': 'text/plain;charset=utf-8'
                })
                response.end('Error');
            }
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html');
            response.end(data);
        })
    }else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
        fs.createReadStream('.' + url).pipe(response);
    }else {
        response.writeHead(404, "404 Error", {
            'Content-Type': 'text/plain;charset=utf-8'
        })
        response.end();
    }
}).listen(3000, () => {
    console.log("server on 3000");
})

// 获取对象原型链
function getProtoChain(obj) {
    const protoChain = [];
    while(obj = Object.getPrototypeOf(obj)) {
        protoChain.push(obj);
    }
    return protoChain;
}