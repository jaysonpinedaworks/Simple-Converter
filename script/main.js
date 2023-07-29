let howManyG = document.getElementById("howManyG");
let howManyB = document.getElementById("howManyB");
let howManyGr = document.getElementById("howManyGr");
let howManyO = document.getElementById("howManyO");

let usd = 53.5;
let yen = 0.45;
let won = 0.03;
let g = 200;
let b = 160;
let gr = 230;
let o = 200;

function calculate(){
    let calc = ((parseFloat(howManyG.value) * g) + (parseFloat(howManyB.value) * b) + (parseFloat(howManyGr.value) * gr) + (parseFloat(howManyO.value) * o ));
    pesoAll.innerHTML = '\u20b1 ' + calc ;
    let Usd = calc / usd;
    Usd = Usd.toFixed(2);
    usdC.innerHTML = Usd;
    let Won = calc / won;
    Won = Won.toFixed(2);
    KwonC.innerHTML = Won;
    let Yen = calc / yen;
    Yen = Yen.toFixed(2);
    YenC.innerHTML = Yen;
    let totg = parseFloat(howManyG.value) * g;
    totG.innerHTML = '\u20b1 ' + totg;
    let totb = parseFloat(howManyB.value) * b;
    totB.innerHTML = '\u20b1 ' + totb;
    let totgr = parseFloat(howManyGr.value) * gr;
    totGr.innerHTML = '\u20b1 ' + totgr;
    let toto = parseFloat(howManyO.value) * o;
    totO.innerHTML = '\u20b1 ' + toto;


}

function thanks(){
    alert("Thank you for shopping");
}