const http = require('http');
const server = http.createServer((req, res) => {
    const url= req.url
    if(url==='/'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>this is home page</h1>') // Set status and headers
        res.end();
    }else if(url==='/about'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>this is about page</h1>') // Set status and headers
        res.end();

    }else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>page not found</h1>') // Set status and headers
        res.end();
    }
    
});

server.listen(5000);