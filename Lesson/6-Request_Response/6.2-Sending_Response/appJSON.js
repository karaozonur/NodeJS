const http = require('http');

const server =http.createServer((req,res)=>{
    //Header
    res.setHeader('Content-Type','application/json');
    res.statusCode=200;
    res.statusMessage='OK';
    //Body
    res.write(JSON.stringify({name:'samsun',price:8000}));
    res.end;


});


server.listen(10000);
console.log("Listening port 3000");