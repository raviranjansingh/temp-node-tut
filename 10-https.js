const http = require('http');
const { resolve } = require('path/posix');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('Here is our short hostory');
    }
    res.end(`<h1>Oops!</h1>
    <p>we cant find the page you are looking for</p>
    <a href="/">back home</a>`);
})

server.listen(5000);