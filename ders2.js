var urunAdi = "iPhone 13"; // tırnak içerisindeki ifade string
let urunKategori = "iPhone"; // let -> var'ın aynısıdır bir farkı yoktur daha yeni eklenen bir özelliktir.
let urunFiyat = 15000; // number içeren ifadeler tırnaklar içerisine yazılmaz. yazılsa bile javascript bunları string olarak görecektir.

console.log("urunAdi typeof(tipi) = " + typeof urunAdi); // typeof -> içeriğin ne olduğunu inceler. string, number vs.
console.log("urunKategori typeof(tipi) = " + typeof urunKategori);
console.log("urunFiyat typeof(tipi) = " + typeof urunFiyat);

// --- //

let sayi1 = "10";
let sayi2 = "30";

console.log(sayi1 + sayi2 + " - Birleştirme işlemi");

// ---> böyle yaparsan sayıları birleştirip sana cevabı verir nedeni javascript bunları string bir ifade olarak görmesi.


// Peki string ifadenin number diye okunması için ne yapmamız lazım?

console.log(Number(sayi1) + Number(sayi2) + " - Number kullanımı");


// böyle yaparak toplama işlemi başarılı bir şekilde çalışır. bu sana uzun geldiyse bir de şu aşağıdakine bak

let sayi3 = 30; // burada string'ten kurtulmak için tırnakları kaldırman yeterli.
let sayi4 = 60;

console.log(sayi3 + sayi4 + " - Basit yoldan sayı toplama işlemi");

// ya da bu sayıları tırnaksız bir şekilde nasıl string'e çevirirsin bir de ona bakalım.

console.log(sayi3.toString() + sayi4.toString() + " - Sayıları toString ile stringe çevirdik");

// string ifadeleri birleştirelim

let isim = "hanzala";
let soyad = "özçelik";

console.log(isim + " " + soyad);

let sinavNotu = 70; // Sınav notu 70 ise
let basarilimi = (sinavNotu >= 50) // sınav notu 50 den yüksek ise true, düşük ise false değerini döndürsün.

console.log(basarilimi);
console.log(typeof basarilimi); // tipi nedir? (boolean)

// birde tipi undefined olan öğelere bakalım. Undefined tanımsız demektir.

let yas;
console.log(yas); // bunun değeri undefined olacaktır nedeni çok basit hiçbir değer girmediğin için.
console.log(typeof yas); // tip'in değeri de doğal olarak undefined olarak gelecektir.