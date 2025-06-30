// import http from 'http';
const http = require('http');
const url = require('url');

// localhost -> 127.0.0.1 -> loop back -> 서버를 실행할 컴퓨터
const host = 'localhost';
const port = 3000;

// req -> request -> 요청
// res -> response -> 응답
const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;
    // http://localhost:3000/(path)
    // url의 포함된 path를 불러와 path별로 다른 응답을 보내줄 수 있다.
    if(path === '/') {
    // http://localhost:3000/ 과 같다.
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Home Page!</h1>');
    } else if(path === '/post') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Post Page!</h1>');
    } else if(path === '/user') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>User Page!</h1>');
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 Page Not Found!</h1>');
    }
});

server.listen(port, host, () => {
    // server.listen을 실행을 했을때, 무언가를 바로 실행하는 함수
    console.log('server running on http://localhost:3000');
});