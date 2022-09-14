const express=require('express');
const router=express.Router();

router.use('/',(req,res,nex)=>{
    console.log("middile  çalıştırıldı");
   res.send('<h1>Selam bro</h1>');
});

module.exports=router;