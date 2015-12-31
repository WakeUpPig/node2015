var http = require('http');
var fs = require('fs');
var mime = require('mime');

var url = require('url');


var serve = function (request, response) {
    var urlObj = url.parse(request.url,true);
    var pathname  = urlObj.pathname;
    console.log(urlObj.query)
    if(pathname=='/'){
        response.setHeader('Content-Type','text/html;charset=utf8');
        fs.readFile('./index.html','utf8', function (err,data) {
            if(err){
                return err;
            }
            response.write(data);
            response.end();
        })
    }else if(pathname=='/baozi') {
        response.end(urlObj.query.baozi);
    }else{
        response.setHeader('Content-Type',mime.lookup(request.url)+';charset=utf8');
        fs.readFile(pathname.slice(1),'utf8', function (err,data) {
            if(err){
                return err;
            }
            response.write(data);
            response.end();
        })
    }

};



var server = http.createServer(serve);
server.listen('8181','localhost', function () {
    console.log('服务开启')
})





/*
*
* 1.服务器 监听一个端口  通过ip 地址
* 2.客户端 就是可以访问一个特定的端口  浏览器
*
* */