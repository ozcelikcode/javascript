console.log('Bu yazı introduction.js den geldi')


// Data Tipleri
// Burada yazılan ifadelerin ne türde olduklarını çıktı olarak gösterir.
console.log( typeof 'ProtoKürt' ) // string
console.log( typeof 5 ) // number
console.log( typeof true ) // boolean
console.log( typeof null ) // object type
console.log( typeof undefined ) // undefined (tanımsız)


// Javascript kodları böyle yazılamaz! //
// Başında kesinlikle rakam yazılmamalı

// let 3y1t // böyle yazılamaz bunun yerine y1t yazılır!

let $_3y1t // başında dolar ve alt tire olursa sorun olmaz.
let $3y1t // bu da sorun olmaz

// camelCase ile dataları daha okunaklı yazabiliriz. İlk kelime küçük sonraki kelimelerin ilk harfi büyük yazılır
let getfirstname // pek okunaklı değil sanki
let getFirstName // bu daha güzel oldu.
let get_first_name // bu da bir alternatif


// Toplu işlemler 2

let youtubeChannel = 'prototurk'
let channelAge = 12
let isChannelStillActive = true
let secondChannel = null
let channelMoney = undefined

// hepsini let diye yazarak uğraşmamak için böyle yazabilirsin. Tırnakların sonunda virgül eklenir
let deneme = 'deneme',
    deneme2 = 'deneme2',
    deneme3 = 'deneme3' // burası son olduğu için virgük eklenmez

const gravity = 9.81
const PI = 3.14

console.log(youtubeChannel, channelAge, isChannelStillActive, secondChannel, channelMoney, gravity, PI)