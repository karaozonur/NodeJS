const express = require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello');
})

app.get('/api/products',(req,res)=>{
    req.send('Hello');
})

app.listen(3000,()=>{
    console.log("Listenin on port 3000");
});