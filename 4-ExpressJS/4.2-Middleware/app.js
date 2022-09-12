const express = require("express");
const app= express();

app.use((req,res,nex)=>{
    console.log("middile 1 çalıştırıldı");
    next();
})

app.use((req,res,nex)=>{
    console.log("middile 2 çalıştırıldı");
    next();
})

app.use((req,res,nex)=>{
    console.log("middile 3 çalıştırıldı");
   res.send('<h1>Selam bro</h1>');
})

app.listen(4000,()=>{
    console.log("Listenin on port 3000");
});