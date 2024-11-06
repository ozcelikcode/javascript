// yas >= 18
// mezuniyet == "lise" ya da mezuniyet == "üniversite"

let mezuniyet = "üniversite";
// let mezuniyet = "lise";
let yas = 18;

if (yas >= 18 && mezuniyet == "lise") { // iki değeri aynı ife alabilirsin. && "ve" işareti ile karşılığı => mezuniyet aynı anda lise ve üniversite mi?
    console.log("1. İf (ve) için : Ehliyet alınabilir.");
}else{
    console.log("1. İf (ve) için : Ehliyet şartları karşılanmamaktadır.");
}

// ve (and &&) işaretinin true değer vermesi için iki değerin true olması gerekir. Biri false olsa bile cevap yine false olacaktır.
// true , true => true
// true , false => false
// false , false => false


// veya (or ||) işaretinin true değer vermesi için iki değerin true olmasına gerek yok. Biri true olsa bile yeter.
// true , true => true
// true , false => true
// false , false => false


if (yas >= 18 && (mezuniyet == "lise" || mezuniyet == "üniversite")) { // bu işaret "||" -veya- demek anlamına gelir karşılığı şöyledir. => mezuniyet lise veya üniversite mi?
    console.log("2. İf (veya) için : Ehliyet alınabilir.");
}else{
    console.log("2. İf (veya) için : Ehliyet şartları karşılanmamaktadır.");
}