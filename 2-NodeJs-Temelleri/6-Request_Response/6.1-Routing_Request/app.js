const http = require('http');
const fs=require('fs');

const server = http.createServer((req,res)=>{
   const url=req.url;
   const method=req.method;
   res.setHeader('Content-Type','text/html');
   if(url === '/')
   {
    res.write(
        <html>
            <head>
                <title>Enter Message</title>
            </head>
            <body>
                <form method="POST" action="/log">
                    <input type="text" name="message"></input>
                    <button type="sumbit">Save</button>
                </form>
            </body>
        </html>
    );
   return res.end();
   }
   if(url  ==='log' && method==='POST'){
        fs.writeFileSync('message.txt','\nDeneme');
        res.statusCode=302;
        res.setHeader('Location','/');
        res.end();
   }
});


server.listen(3000);
console.log("Listening port 3000");