const http = require('http');

const server =http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("Hello");
        res.end;
    }
    if(req.url==='/api/product/'){
        res.write("Ürün Lİstesi");
        res.end;
    }
});


server.listen(3000);
console.log("Listening port 3000");