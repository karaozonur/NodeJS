//Logger js doyasını app js dahil ettik
const Logger = require('./logger');
const logger=new Logger();

logger.on('logout2',function(args){
    console.log("Bağlantı koptu",args);
})


logger.log('onur açtı');

