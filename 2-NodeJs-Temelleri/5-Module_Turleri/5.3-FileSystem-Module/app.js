const fs=require('fs');

//* File System
//* Dosya oluştur klasör oluştur sil dosya alakalı tüm işlemler

//** readdir
//* Dosya Bilgilerini içinde ne dosyalar olduğubu gösterir
//* CONSOLE ÇIKTISI [ 'app.js', 'index.html' ]
const files=fs.readdir('./',function(error,files){ //SENKRON
    if(error){
        console.log(error);
    }
    else{
        console.log(files);
    }
        
});

//** readFile
//* Dosya İçeriğini Okuma console yazdırma - readFile
//* CONSOLE ÇIKTISI <!DOCTYPE html> İNDEX.HTML TÜM METİN YAZILARIDIR

const data = fs.readFile('index.html','utf8',function(error,data){
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
});

//* writeFile
//* YENİ DOSYA OLUŞTURMA  - 
//* CONSOLE ÇIKTISI = proje içinde yeni dosya oluşturuluyor. içinde HELLO YAZIYOR

fs.writeFile('deneme.txt','Hello',function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Dosya oluşturuldu.");
    }
});

//* appendFile
//* İçerik varsa  Oluşturulan içeriğin sonuna yeni metin ekler

fs.appendFile('deneme.txt','Hello 2',function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Dosya oluşturuldu.");
    }
});

//* appendFile
//* Oluşturulan içeriğin sonuna yeni metin ekler

fs.appendFile('deneme1.txt','Hello 2',function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Dosya içeriği değiştirildi.");
    }
});

//* unlink
//* Komple dosyayı siler

fs.unlink('deneme.txt',function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Dosya silindi.");
    }
});

//* rename
//* Komple dosyayı siler

fs.rename('deneme.txt','denemeyeni.txt',function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Dosya adı değiştirildi.");
    }
});