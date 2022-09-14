const express = require("express");
const app= express();

//*bodyParser eklee
const bodyParser=require('body-parser');

const adminRoutes=require('./routes/admin');
const userRoutes=require('./routes/user');

app.use(bodyParser.urlencoded({extended:false}));
app.use('/admin',adminRoutes);
app.use(userRoutes);

app.use((req,res,next)=>{
   res.status(404).send('<H1> Page Not Found </h1>');

});


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