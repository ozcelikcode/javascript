// String Metotları //->

let baslik = "Komple Uygulamalı Web Geliştirme Eğitimi";
let baslik2 = "          Abobe 2022 Eğitim Seti          ";

buyukHarf = baslik.toUpperCase();
kucukHarf = baslik.toLocaleLowerCase();
harfSayisi = baslik.length; // boşluk sayısı ve harf sayısı alınır.

harfiAl = baslik[10]; // 10'uncu sıradaki harfi alır.
// harfiAl = baslik[5]; // 5'inci sıradaki harfi alır.

harfiAl2 = baslik.slice(0, 33); // 0 ve 33 arasındaki bütün harfleri al dedik burada dikkat edin 33. harfi dahil etmez.
harfiAl3 = baslik.slice(7); // 7'den sonraki tüm harfleri ve boşlukları alır. 7 dahil değildir sadece 7 ve sonrası dahildir.
harfiAl4 = baslik.slice(-22); // -22'ten önceki harflerin hepsini alır aynı yukarıdaki gibi işlev görür.
harfiAl5 = baslik.slice(-22, -10); // Sağ taraftan -10 ve -22 arası bütün harfleri alır.

harfiAl6 = baslik.substring(7, 18); // 5 ve 10 arası bütün harfleri alır yalnız burada kullanılan ifade yukarıdaki ile aynıdır.

kelimeDegistir = baslik.replace("Web Geliştirme", "Adobe 2022 Programları"); // burada ilk ifadeye değiştirmek istediğimiz yerin orijinal başlığını yazıyoruz sonra ikinci tırnağa neye çevirmek istediğimizi yazıyoruz.

sagSolBoslukSil = baslik2.trim(); // baş ve son boşluğu siler
solBoslukSil = baslik2.trimStart(); // Sadece baştaki boşluğu siler
sagBoslukSil = baslik2.trimEnd(); // Sadece sondaki boşluğu siler

kelimeArama = baslik.indexOf("Geliştirme"); // Kelimeleri arar ve hangi harf sıralamasında olduğunu gösterir.

diziElemani = baslik.split(" "); // boşlukları görmeyecek şekilde bütün dizi elemanlarını gösterir.
diziElemani2 = baslik.split(" ")[2]; // Sadece 2. index'teki elemanı alır.

console.log(buyukHarf);
console.log(kucukHarf);
console.log(harfSayisi);

console.log(`10. sıradaki harf alındı = ${harfiAl}`);
console.log(`0 ve 33 arasındaki harfler alındı = ${harfiAl2}`);
console.log(`7 den sonraki bütün harfler alındı = ${harfiAl3}`);
console.log(`22 den önceki bütün harfler alındı = ${harfiAl4}`);
console.log(`Sağdan -22 ve -10 arası bütün harfler alındı = ${harfiAl5}`);
console.log(`Harf Almanın Farklı Yöntemi SubString = ${harfiAl6}`);

console.log(`Kelime Değiştirme = ${kelimeDegistir}`);

console.log(`Baş ve Son boşluğu siler = ${sagSolBoslukSil}`);
console.log(`Baştaki boşluğu siler = ${solBoslukSil}`);
console.log(`Sondaki boşluğu siler = ${sagBoslukSil}`);

console.log(kelimeArama);

console.log(`Bütün dizi elemenları listeleniyor = ${diziElemani}`);
console.log(`Sadece 2. index dizi elemanı listeleniyor = ${diziElemani2}`);

// DAHASI İÇİN BU DERSİ İNCELEYİN https://www.w3schools.com/jsref/jsref_obj_string.asp