const http = require('http');

const server =http.createServer((req,res)=>{
    //Header
    res.setHeader('Content-Type','text/plain');
    res.statusCode=200;
    res.statusMessage='OK';
    //Body
    res.write('Hello');
    res.end;


});


server.listen(10000);
console.log("Listening port 3000");