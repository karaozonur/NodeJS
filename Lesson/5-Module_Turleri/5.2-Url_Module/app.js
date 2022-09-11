//* Girilen URL Bilgisindeki detaylara ulaşmamızı sağlar

const url =  require('url');

const address="https://anatoliahosting.com/index.php/urun/baslangic-paketi/";

let result = url.parse(address,true);
//protocol
//https:
console.log(result.protocol);
//slashes
//true
console.log(result.slashes);
//auth
//null
console.log(result.auth);
//host
//anatoliahosting.com
console.log(result.host);
//port
//null
console.log(result.port);
//hostname
//anatoliahosting.com
console.log(result.hostname);
//hash
//null
console.log(result.hash);
//query
// [Object: null prototype] {}
console.log(result.query); // Varsa 
//pathname
///index.php/urun/baslangic-paketi/
console.log(result.pathname);
//path
///index.php/urun/baslangic-paketi/
console.log(result.path);
//href
//https://anatoliahosting.com/index.php/urun/baslangic-paketi/
console.log(result.href);