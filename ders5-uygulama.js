// let uygulama1 = 34;
// if (uygulama1 >= 10 && uygulama1 <= 50) {
//     console.log("Verilen sayı geçerli");
// } else {
//     console.log("Verilen sayı geçersiz!");   
// }

// let uygulama2 = 25;
// if (uygulama2 % 2 == 1 && uygulama2 > 0) {
//     console.log("Verilen sayı pozitif tek ifadedir.");
// } else {
//     console.log("Verilen sayı pozitif çift ifadedir.");
// }


// Benim yöntemim

let uygulama3 = 500;

if (uygulama3 > 99) {
    if (uygulama3 > 999) {
        if (uygulama3 > 9999) {
            console.log(uygulama3 + " Sayısı 5 basamaklı ve 9999'dan büyüktür.");
        } else {
            console.log(uygulama3 + " Sayısı 4 basamaklı ve 999'dan büyüktür.");
        }
    } else {
        if (uygulama3 == 999) {
            console.log(uygulama3 + " Sayısı 999'a eşittir.");
        } else {
            console.log(uygulama3 + " Sayısı üç basamaklı ve 999'dan küçüktür.");
        }
    }

} else {
    if (uygulama3 == 99) {
        console.log(uygulama3 + " Sayısı 99'a eşittir.");
    } else {
        if (uygulama3 < 10) {
            console.log(uygulama3 + " Sayısı 1 basamaklı ve 10'dan küçüktür.");
        } else {
            console.log(uygulama3 + " Sayısı iki basamaklı ve 99'dan küçüktür.");
        }
    }
}


// farklı yöntem

let x = 5, y = 8, z = 9;

if (x > y && x > z) {
    console.log("X hepsinden büyüktür.");
} else if (y > x && y > z) {
    console.log("Y hepsinden büyüktür.");
} else if (z > y && z > x) {
    console.log("Z hepsinden büyüktür.");
}else{
    console.log("Hepsi birbirine eşittir.");
}