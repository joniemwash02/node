const http =require('http')
const server=http.createServer((req, res)=>{
    console.log('server is connected')
})

server.listen(5000)