const http = require('http');
const server = http.createServer((req, res) => {
    console.log('server is connected');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>this is hoe page</h1>') // Set status and headers
    res.end();
});

server.listen(5000);