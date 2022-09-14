const express=require('express');
const router=express.Router();

router.get('/add-product',(req,res,next)=>{
  
});

router.post('/add-product',(req,res,next)=>{
    //Database kayıt vs yapılabilir
    console.log(req.body);

    res.redirect('/');
});