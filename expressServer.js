const http = require('http');
const fs = require('fs')
// const keepAliveAgent = new http.Agent({ keepAlive: true });
// options.agent = keepAliveAgent;
// http.request(options, onResponseCallback);

const server = http.createServer((req,res)=>{
    if(req.url === "/") {
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('X-Foo', 'bar');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const homePageHtml = fs.readFileSync('node.html');
        res.write(homePageHtml);
        res.end();
    } else if(req.url === "/node.png") {
        res.setHeader('Content-Type', 'image/png');
        res.setHeader('X-Foo', 'bar');
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const image = fs.readFileSync('node.png');
        res.write(image);
        res.end();
    } else if(req.url === "/style.css") {
        res.setHeader('Content-Type', 'text/css');
        res.setHeader('X-Foo', 'bar');
        res.writeHead(200, { 'Content-Type': 'text/css' });
        const style = fs.readFileSync('style.css');
        res.write(style);
        res.end();
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('X-Foo', 'bar');
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write("<h3>404 Page Not Found</h3>");
        res.end();
    }
});

server.listen(3000);