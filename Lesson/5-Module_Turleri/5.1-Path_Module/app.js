const path = require('path');

//**** Dosyanın tam yolunu bulmak
let result=path.resolve("app.js");

console.log(result);
//CONSOLE ÇIKTISI = C:\Users\OnurKaraoz\Desktop\NodeJS\lesson\5-Module_Turleri\5.1-Path_Module\app.js

//**** Dosyanın uzantısına bakmak
result = path.extname('app.js')
console.log(result);
// CONSOLE ÇIKTISI = .js


//**** __filename ve __dirname globaldır. dosya bilgilerini gösterir
result = path.parse(__filename);
console.log(result);

//* root
//*  HANGİ SÜRÜCÜDE ÇALIŞTIĞINI GÖSTERİR. CONSOLE ÇIKTISI =   root: 'C:\\',
console.log(result.root);

//* dir
//* PROJENİN TAM DOSYA YOLUNU GÖSTERİR = dir: 'C:\\Users\\OnurKaraoz\\Desktop\\NodeJS\\LESSON\\5-Module_Turleri\\5.1-Path_Module',
console.log(result.dir);
//* base
//* DOSYA TAM ADINI GÖSTERİR = base: 'app.js',,
console.log(result.base);
//* ext
//* DOSYA  UZANTISINI  GÖSTERİR = ext: '.js',,
console.log(result.ext);
//* name
//* DOSYA  ADINI  GÖSTERİR = name: app',,
console.log(result.name);