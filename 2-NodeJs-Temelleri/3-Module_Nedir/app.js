//
// ** JAVASCRİPT
//
// console.log(firstName);

// * FARKLI SCRİPT  DOSYALARINDA AYNI DEĞİŞKEN ADLARINDA VERİLERİ CONSOLE EKRANINA YAZDIRDIR.
// var controllerA=(function(){
//     //script  A
//     var firstName="Onur";
//     var log=function(){
//         console.log(this.firstName);
//     }

//     return{
//         firstName,log
//     }
// }());

// var controllerB=(function(){
//     //script B
//     var firstName="karaoz";
//     var log=function(){
//         console.log(this.firstName);
//     }
//     return{
//         firstName,log
//     }
// }());

// console.log(controllerA.firstName);
// console.log(controllerB.firstName);
//
// ** NODE JS
//
//* NODE JS'DE HER BİR SCRİPT DOSYASI BİR MODULE OLARAK TANIMLANIYOR
//* NODE JS'DE BİR BİRİ İLE İLİŞKİ KURMAK İÇİN * KESİNLİKLE BİRBİRİ İÇİNDE TANIMLANMASI LAZIM

var firstName="Onur";
var age=30;

var log=function(name){
    console.log(name);
}

module.exports.name=firstName;

module.exports.log=log;

console.log(module); 