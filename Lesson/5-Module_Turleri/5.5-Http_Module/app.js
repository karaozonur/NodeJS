const http = require('http');

const server =http.createServer();

server.on('connection',function(){
    console.log("new connection");
});

server.listen(3000);
console.log("Listening port 3000");