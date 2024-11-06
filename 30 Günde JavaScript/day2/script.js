//--------------- KAYNAK: https://github.com/Asabeneh/30-Days-Of-JavaScript ---------------//

//---------- Primitive Data Types (İlkel veri türleri) ----------//

//--- iPucu ---//
// 'word' değişkeninin ilk harfi 'Y' ile değiştirilemez. Hata vermez fakat 'JavaScript' (string) ifadesini konsolda çıktı olarak gösterir.
let word = 'JavaScript'

word[0] = 'Y'

console.log(word) // Sonuç Değişmez -> JavaScript


//--- iPucu 2 ---//
// burada iki ifade (sayı) birbirinin aynısı.
let numberOne = 5
let numberTwo = 5

console.log('Sayılar birbirinin aynısı mı? :', numberOne == numberTwo) // Bu şu anlama geliyor -> numberOne eşittir numberTwo -> değerler true (doğru) bir ifadedir


//--- iPucu 2.1 ---//
let js = "JavaScript"
let py = "python"

console.log('JavaScript ve Python :', js == py) // değerler eşit değilse false değeri gözükür.


//--- iPucu 2.2 ---//
let lightOn = true
let lightOff = false

console.log('LightOn ve LightOff :', lightOn == lightOff) // Değerler birbirinin aynısı olmadığı için false değeri gözükecektir.



//---------- Non-Primitive Data Types (İlkel olmayan veri türleri) ----------//

//--- iPucu 3 ---//
let numbers = [0, 2, 3, 'prototurk', 5] // bu parantezler sayesinde (array oluyor bu parantez) çoktan fazla değer yazabiliyoruz. Burada 3 farklı değer yazdık.

numbers[0] = 1 // 'numbers' değişkeninin 0 (sıfırıncı) ifadesini 10'a çevir demektir. number ifade için çalışır fakat strings ifade için çalışmaz.
numbers[3] = 4 // prototurk yazısını 2 rakamına değiştir diyoruz. Değiştirme işlemi (array içinde) olumlu sonuçlanacak.

console.log('Array ile Değer değiştirme işlemi :', numbers)


//--- iPucu 4 ---//
// bu değerler maalesef bir birinin aynısı olsa bile javascript bunları aynı olarak görmez ve false değerini döndürür.
let nums = [1, 2, 3]
let nums2 = [1, 2, 3]

console.log('Numara eşleştirmesi :', nums == nums2) // false


//--- iPucu 4.1 ---//
// başka bir yöntemle bile yapmaya çalışsak yinede javascript yaptığımız işe false değeri yapıştırıyor.
let userOne = {
    name : 'Hanzala',
    surname : 'Özçelik'
}

let userTwo = {
    name : 'Hanzala',
    surname : 'Özçelik'
}

console.log('Kullanıcı eşleştirmesi :', userOne == userTwo)

//--- iPucu 4.2 ---//
// bu sefer 'iPucu 4'teki gibi yazarak true değer alabilmek için -> değer1 = değer2 şeklinde belirtmemiz gerek
demoNumbers = [1, 2, 3]
demoNumbers2 = [1, 2, 3]
demoNumbers = demoNumbers2 // burada böyle belirtiyoruz.

console.log(demoNumbers == demoNumbers2)


console.log('') // boşluk niyetine

//---------- Math Object (Matematiksel ifadeler) ----------//
//--- iPucu 5 ---//
// JavaScript'te 'Math' Nesnesi, sayılarla çalışmak için birçok yöntem sağlar.
const PI = Math.PI // 'Math' ifadesi ilk harfi büyük yazılır

console.log('Pi sayısı tam değeri:', PI)

console.log('Pi sayısını yuvarlama: ', Math.round(PI)) // PI sayısını değerinin sonucunu verir. Değerleri en yakın sayıya yuvarlamak için 3

console.log(Math.round(9.81)) // Round işlemi, en yakın sayıya yuvarlar.
console.log(Math.round(9.49)) // Round işlemi, en yakın sayıya yuvarlar.

console.log(Math.floor(PI)) // Aşağı yuvarlar
console.log(Math.floor(10.3)) // Aşağı yuvarlar

console.log(Math.ceil(9.1)) // Sayıyı yukarı yuvarlar yani 10'a.

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // En küçük değeri arar ve sonuç olarak verir. -5 en küçük değerdir.
console.log(Math.min(1000, 2000, 3000)) // En küçük değer '1000' sayısı olacaktır.

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // En büyük değeri arar ve sonuç olarak verir. 20 en büyük değerdir.
console.log(Math.min(1000, 2000, 3000)) // En büyük değer '3000' sayısı olacaktır.


const randNum = Math.random() // Bu sadece 0 ile 0.9999999 arasında rastgele sayı verir.
console.log(randNum)


// Eğer istediğin bir aralıkta rastgele sayı versin diyorsan

const randNum2 = Math.floor(Math.random () * 11)  // der isek 10 ve 0 arasındaki sayılardan cevaplar verecektir.
console.log(randNum2)


console.log(Math.abs(-10)) // -10 sayısının mutlak değerini yani pozitif sayısını veirir.

console.log(Math.sqrt(100)) // 100 sayısını karekökü verilir. 100/2 = 10
console.log(Math.sqrt(2)) // 2 sayısını karekökü verilir. 2/2 = 1.4142135623730951


console.log(Math.pow(3, 2)) // 3'ü 2 kere çarpar. 3.3 = 9
console.log(Math.pow(100, 2)) // 100'ü 2 kere çarpar. 100.100 = 10.000
/* Daha kolay yöntem -> */ console.log(3 ** 2) // cevap yine 9'dur. 3.3 = 9

// Sinüs, Cosinüs ve logaritma işlemleride mevcut fakat ben eklemedim
// -- NOT: JavaScript'te daha fazla matematiksel işlemleri olduğu için kısa tuttum. Tabiki diğerleri önemsiz değiller bir oyun yaptığında ihtiyacın olacak!  -- //


console.log(" ") // boşluk misali


//---------- Strings (kelimeler) ----------//
//--- iPucu 6 ---//
//--- Strings İfadeleri toplama (birleştirme) ---//

let firstName = 'Hanzala';
let lastName = 'Özçelik';

let fullName = firstName+ " " + lastName;

console.log('\\',fullName)

//--- iPucu 6.1 ---//
// Strings'ler birleştirilirken sayılar toplanır.
let sayi = 10
let sayi2 = 12.7

let topla = sayi + sayi2

console.log(topla)

//--- iPucu 6.2 ---//
// Eğer strings + number toplanırsa bunlar birleştirilir.

let string2 = "Merhaba ben "
let number2 = 20

let topla2 = string2 + number2 + " yaşındayım."

console.log (topla2)



console.log(" ") // boşluk misali



//--- iPucu 7 ---//
// Özel Karakter Kullanımı //

/* Bazı karakterler tırnaklar içerisine yazıldığında bile JavaScript onları kod olarak algılıyor.
O yüzden JavaScript'te ve diğer programlama dillerinde \ ardından gelen bazı karakterler bir özel karakter kullanılabilir dizilerdir. 
En yaygın escape (özel karakter) karakterlerini görelim:

\n: satır arası boşluk
\t: Boşluk, 8 boşluk verir
\\: (\) işareti
\': tek tırnak (')
\": çift tırnak (")

*/

// Kısaca kullanımı
console.log('Merhaba\nben Ahmet')
console.log('Merhaba\tben Ahmet')
console.log('Merhaba ben \'Ahmet\'')
console.log('Merhaba ben \"Ahmet\"')


console.log(" ") // boşluk misali


//-- iPucu 8 --//
// değişken ataması yapabiliriz. 
// Bilgi : bu değişkeni içeride daha ayırt edilebilir tutmak istiyorsak (`) işaretini kullanmamız daha mantıklı olacaktır. Bir de sonuç olması gerek sanki a + b = ab gibi
let a = 3
let b = 5

console.log(`${a} ve ${b}\'in toplamı ${a + b}\'dir`)

// (`) backtick işareti sayesinde isteiğin kadar boşluk verebilir ve stringsleri toplama zorunluluğu olmaz.

console.log(`backtick
içerisinde
deneme
yapıyorum.
`)

// Daha farklı örnek
console.log(`${a} sayısı ${b} sayısından büyüktür: ${a > b}(Yanlış)`)


//--- iPucu 9 ---//
// JavaScript'teki her şey bir nesnedir. Boşluk bile bir nesne olarak verilir.
let js2 = 'JavaScript'
console.log(js2.length) // = 10 | her boşlukta cevap değişir!


//--- iPucu 10 ---//
// Strings'ler birleştirilirken sayılar toplanır.
let string = 'JavaScript'

console.log(string.toUpperCase()) // Bütün harfleri büyütür.

console.log(string.toLowerCase()) // Bütün harfleri küçültür.


//--- iPucu 11 ---//
// substr ile bir başlangıç ya da aralık içerisindeki alır
console.log(string.substr(4)) // yukarıdaki JavaScript yazısının sadece 'Script' kısmını (yani 4. harften sonrasını) alır. 
console.log(string.substr(1, 5)) // yukarıdaki JavaScript yazısının sadece 'avaSc' kısmını (yani 1 ve 5 arasını) alır.
//--!! substring bileşeni de var fakat eklemedim sen bakarsın zaten substr'dan çok da farklı bir şey değil !!--//


//--- iPucu 12 ---//
let string3 = '30 Günde JavaScript'

console.log(string3.split()) // yukarıdaki '30 Günde JavaScript' yazısını tek dizi haline getirir.

console.log(string3.split(' ')) // burada boşluklar arasındaki bütün sözcükleri dizi haline getir diyoruz.

console.log(string3.split('')) // eğer tırnak koyupta boşluk bırakmazsak (yukarıdaki örnek gibi), her harfi dizi haline getirir.

//--- iPucu 13 ---//
let string4 = 'Ters Çevirilecek Yazı'
// NOT: yukarıdaki string4 içerisindeki 'Ters Çevirilecek Yazı' yazısını eğer ters çevirmek istiyorsak dizi haline getirmemiz gerek. Çevirmezseniz çalışmaz!
/* 1 */ console.log(string4.split()) // 'Ters Çevirilecek Yazı' tek dizi haline getirdik
/* 2 */ console.log(string4.split('')) // tek tek harfleri ayırıyoruz
/* 3 */ console.log(string4.split('').reverse()) // ters hale çevirdik harf harf.
/* 4 */ console.log(string4.split('').reverse().join('')) // burada join sayesinde harfleri birleştiriyoruz.

/* 
1- Sonuç olarak burada ilk olarak split ile split ile yazıyı TEK bir dizi haline getirdik.
2- Sonra split parantezler içerisine tırnak işareti ekleyip tek tek harf olarak dizi atadık.
3- Dizi atadığımız harfleri tek tek ters çevirdik.
4- Dizi ayadığımız harfleri ters çevirip join sayesinde birleştirdik.

||--- ÖNEMLİ NOT: sadece numara 4'teki numarayı alman yeterli diğerleri (1, 2, 3) sadece aşama aşama göstermek için yapıldı! ---||
*/


//--- iPucu 14 ---//
let string5 = '     30 Günde JavaScript     '

console.log(string5)
console.log(string5.trim(' ')) // baştaki ve sondaki boşlukları siler.
console.log(string5.trim()) // Trim parantezler içerisindeki tırnaklar olmazsa bile sorun olmaz yinede başta ve sondaki boşlukları siler.


//--- iPucu 15 ---//
console.log(string5.includes('Günde')) // string5 içerisinde 'Günde' diye bir şey varmı onu aratır. 
console.log(string5.includes('günde')) // HARFLERİN büyük ya da küçük olma durumlarında arama sonucu çıktısı farklılık gösteriyor. string5 içerisinde 'günde' diye bir şey yok! 'Günde' diye bir şey var ama.
// Varsa True yoksa False.
console.log(string5.includes('PHP')) // string5 içerisinde eğer PHP diye bir şey varsa true, yoksa false değeri gözükür.


//--- iPucu 16 ---//
console.log(string5.replace('JavaScript', 'Python')) // 'JavaScript' yazısını bulmasını isteyip 'Python' diye değiştirir.


//--- iPucu 17 ---//
let string6 = "30 Günde CSS"

console.log(string6.charAt(5)) // charAt sayesinde 5. harfi gösterir. UNUTMA javascript'te sayma işlemleri 0'dan başlar.


//--- iPucu 18 ---//
console.log(string6.charCodeAt(0)) // charCodeAt harflerin uniCode karşılığını verir. Bende çok bildiğimi söyleyemem sen yine de bak.


//--- iPucu 19 ---//
console.log(string6.indexOf('G')) // G harfinin kaç sayı ötede olduğunu söyler.
