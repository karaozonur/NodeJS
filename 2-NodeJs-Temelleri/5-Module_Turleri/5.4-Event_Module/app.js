//* Tetiklenme sonucunda çalıştırma 
//* Event yapısı CLASStır


//Listener kayıt et
emmiter.on('connection',function(){
    console.log("Bağlantı Kuruldu");
})

emmiter.on('logout',function(param,params2){
    console.log("Bağlantı koptu");
})

emmiter.on('logout2',function(args){
    console.log("Bağlantı koptu");
})

// Event Tetikle
emmiter.emit('connection');


emmiter.emit('logout',1,'hello');

emmiter.emit('logout2',{id:1,message:'hello'});



