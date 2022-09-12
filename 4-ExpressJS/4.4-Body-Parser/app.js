const express = require("express");
const app= express();

//*bodyParser eklee
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));



//*Rounting Ekleme
app.use('/add-product',(req,res,nex)=>{
  
   res.send(`
    <html>
        <head> <title>Form</title></head>
        <body>
        <form action="/product" method="post">
            <input type="text" name="productname">
            <input type="submit" value="send">
        </form>
        </body>
    </html>
   `);
});


app.post('/product',(req,res,next)=>{
    //Database kayıt vs yapılabilir
    console.log(req.body);

    res.redirect('/');
});

app.use('/',(req,res,nex)=>{
    console.log("middile  çalıştırıldı");
   res.send('<h1>Selam bro</h1>');
});


app.listen(5000,()=>{
    console.log("Listenin on port 3000");
});