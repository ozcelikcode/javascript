let ogr1_ad = "Hanzala";
let ogr1_soyad = "Özçelik";
let ogr1_dogumTarihi = "2005";
let ogr1_matematik1 = 95;
let ogr1_matematik2 = 90;
let ogr1_matematik3 = 92;
let ogr1_ortalama = (ogr1_matematik1 + ogr1_matematik2 + ogr1_matematik3) / 3;

console.log("Normal Kullanım = " + ogr1_ortalama); // Normal kullanım.
console.log("Ondalıklı sonuç = " + parseFloat(ogr1_ortalama)); // ondalıklı olarak sonuç görmek istiyorsanız bu şekil kullanılır. Örnek : 50.xxx şeklindedir.
console.log("Ondalıksız sonuç = " + parseInt(ogr1_ortalama)); // ondalıksız bir şekilde görmek için bu işlem kullanılır. Örnek : 50
console.log(ogr1_ortalama >= 50); // Burada öğrencinin geçip geçmediğine bakıyoruz. Eğer geçmişse ya da eşit ise true, geçememişse false değeri döner.

let ogr2_ad = "Ada";
let ogr2_soyad = "Bilgi";
let ogr2_dogumTarihi = "2006";
let ogr2_matematik1 = 20;
let ogr2_matematik2 = 10;
let ogr2_matematik3 = 90;

let suankiYil = new Date().getFullYear();
// Yazıldığı tarih 2022 29 Ağustos

let ogr1_yas = suankiYil - ogr1_dogumTarihi;
let ogr2_yas = suankiYil - ogr1_dogumTarihi;

let ogr2_ortalama = (ogr2_matematik1 + ogr2_matematik2 + ogr2_matematik3) / 3;

console.log("Öğrenci2 Yaşı = " + ogr1_yas);

console.log(ogr2_ortalama >= 50);