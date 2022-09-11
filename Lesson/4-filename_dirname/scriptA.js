//* Console Çalışmakta olduğumuz projenin tam yolunu yazar. C:\Users\OnurKaraoz\Desktop\NodeJS\lesson\4-filename_dirname
console.log(__filename);
//** Çalışmakta olduğumuz projenin klasör yolunu gösterir C:\Users\OnurKaraoz\Desktop\NodeJS\lesson\4-filename_dirname\scriptA.js
console.log(__dirname);


//ÖRNEK
//--var age=;
//(function(exports,require,module,__filename,__dirname){
console.log(__dirname);
console.log(__filename);

 var firstName='Onur';

 var log=function(name){
    console.log(name);
 }
//Dışarıya açtık Public Öğeleri
exports={
    firstName,
    log
 }


//})();