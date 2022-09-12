const express = require("express");
const app= express();




//*Rounting Ekleme
app.use('/add-product',(req,res,nex)=>{
    console.log("middile  çalıştırıldı");
   res.send('<h1>Add Prodct</h1>');
});


// slash ile başlamadı bütün linkeri etkiler Rount eklemen gerek en altta olmalı / böyle başlayan

app.use('/',(req,res,nex)=>{
    console.log("middile  çalıştırıldı");
   res.send('<h1>Selam bro</h1>');
});

app.listen(4000,()=>{
    console.log("Listenin on port 3000");
});