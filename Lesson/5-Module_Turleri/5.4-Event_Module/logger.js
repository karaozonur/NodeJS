const EventEmitter= require ('events');

//const emmiter=new EventEmitter();

class Logger extends EventEmitter{
     log(message){
        console.log(message);
    
        this.emit('logout2',{id:1,message:'hello'});
    }
}




module.exports=Logger;