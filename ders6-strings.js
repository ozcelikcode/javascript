// Yazılıdığı tarih 30.08.2022 - 15:42

let ad = "Hanzala";
let soyad = "Özçelik";
let yas = 17;
let sehir = "İstanbul";
let meslek = "yazılım mühendisliği";

let mesaj1 = "Adım " + ad + " soyadım " + soyad + ", yaşım " + yas + ", yaşadığım şehir " + sehir + ", olmak istediğim meslek " + meslek;



// Burası gayet anlaşılır ve kolay, burada backtick ile arasına ${deger} şeklinde yazıyoruz. (`) bu işareti kullanılıyoruz bunu yazabilmek için -( AltGr + , )- tuşlarına bas

let emeklilik = (60 - yas > 0) ? `emekliliğe ${60 - yas} yıl kaldı.` : "zaten emekli oldum."; // karşılığı => eğerki emekli olmamış isem birinci sorguyu çalıştırsın yani olmadım bilgisini versin. Fakat emekli olduysam. Soru işareti ile araştırıp olup olmadığıma baksın ve 2. sorguyu çalıştırsın. İki değeri ":" işareti ile ayırıyoruz birinci değer true ikinci değer ise false değer olacak şekilde.
let mesaj2 = `Adım ${ad} soyadım ${soyad}, yaşım ${yas}, yaşadığım şehir ${sehir}, olmak istediğim meslek ${meslek}, ve ${emeklilik}`;

console.log(mesaj2);