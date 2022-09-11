const http = require('http');

const server =http.createServer((req,res)=>{
    //Header
    res.setHeader('Content-Type','text/html');
    res.statusCode=200;
    res.statusMessage='OK';
    //Body
    res.write('<html>');
    res.write('<head><title>Title</title>');
    res.write('<body>');
    res.write('<h1>Selam</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end;


});


server.listen(10000);
console.log("Listening port 3000");