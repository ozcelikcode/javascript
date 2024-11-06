// birinci yöntem

if (2 > 3){
    console.log("birinci sayı ikinci sayıdan büyüktür.");
}else{
    console.log("birinci sayı ikinci sayıdan küçüktür.");
}


// ikinci örnek

let hataMesaji = "Hata : Giriş Yapılamadı!";
let basariMesaji = "Giriş Yapıldı!";

let girisYaptimi = true; // bu değeri true ya da false yazarak farklarına bakabilirsin.

if (girisYaptimi){
    console.log(basariMesaji); // eğerki değer true ise bu yazıyı göstersin
}else{
    console.log(hataMesaji); // eğerki değer false ise bu yazıyı göstersin // hata mesajı 1 --
}


// farklı yöntem 1

// Başarı mesajı
if(girisYaptimi == true){ //-> Eğerki değer true'a eşitse bu mesaj gösterilir. // Başarı mesajı 2
    console.log(basariMesaji);
}

// Hata mesajı
if(girisYaptimi == false){ //-> Eğerki değer false'a eşitse bu mesaj gösterilir. // hata mesajı 2 --
    console.log(hataMesaji);
}


// farklı yöntem 2

if(!girisYaptimi){ // ünlem işareti başa konup yine false döngüsünü aratır. // hata mesajı 3 --
    console.log(hataMesaji);
}


// Daha farklı yöntem ---------------------------------------------------------//>

let kullanici = "ozcelikcode"; // kullanici karşısındaki string ifadeye eşitmi?
let sifre = "12345"; // kullanici şifresi eşitmi?

let girisYaptimi2 = (kullanici == "ozcelikcode"); // eşit mi? eşit değilse else harekete geçer!

// if (girisYaptimi2) {
//     console.log(kullanici + " uygulamaya başarıyla giriş yaptı");
// }else{
//     console.log(kullanici + " uygulamaya giriş yapamadı. Kullanıcı isminin aynı olduğundan emin olunuz.");
// }

// YUKARIDAKİ İŞLEMİN BİRAZ FARKLI BİR YÖNTEMİ

// Daha da farklı bir yöntem

if (kullanici == "ozcelikcode") {
    if (sifre == "12345") {
        console.log(basariMesaji + " Şifreniz doğru!");
    } else {
        console.log("Şifreniz yanlış şifrenizi kontrol ediniz");
    }
} else {
    console.log("Kullanıcı adı yanlış girilmiş.");
}
// Daha farklı yöntem burada bitti ---------------------------------------------------------//>