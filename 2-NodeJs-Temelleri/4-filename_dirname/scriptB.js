
//*SCRİPT A MODULUNU SCRİPT 'B YE BAĞLADIK
//** TARAYICIDA BÜTÜN DEĞİŞKENLER BİRBİRİNİ BULURKEN BURDA BULMAZ

const scriptA=require('./scriptA');

scriptA.log('Karaoz');
console.log(scriptA.age);