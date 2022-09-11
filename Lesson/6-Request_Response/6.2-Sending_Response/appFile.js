const http = require('http');

const fs=require('fs');

const server =http.createServer((req,res)=>{
    
fs.readFileSync('index.html',function(error,file){
    if(error){
        res.setHeader('Content-Type','text/plain');
        res.statusCode=404;
        res.statusMessage='OK';
        res.end('Dosya Bulunamadı');
    }else{
        res.setHeader('Content-Type','text/html');
        res.statusCode=200;
        res.statusMessage='OK';
        res.end(file);
    }

});

});


server.listen(10000);
console.log("Listening port 3000");