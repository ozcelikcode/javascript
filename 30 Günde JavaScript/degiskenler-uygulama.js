let ogrenci = 'Ada Bilgi'

let ogrenciDogum = 2012
let ogrenciYas = (2023 - ogrenciDogum)

let ogrenciNot = 70
let ogrenciNot2 = 70
let ogrenciNot3 = 80

let ogrenciMatNot = (ogrenciNot + ogrenciNot2 + ogrenciNot3)
let ogrenciMatOrtalama = (ogrenciMatNot / 3)

let gecerlilik = 50

let ogrenciGectimi = (ogrenciMatOrtalama >= gecerlilik)


console.log(ogrenci, 'adlı öğrencimiz', ogrenciYas, 'yaşında olup,', ogrenciMatOrtalama, 'not ile matematik sınavından', ogrenciGectimi)