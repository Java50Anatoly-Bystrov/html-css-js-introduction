//1 - A
let str1 = "pappy";
let str2 = "apple";
const finishAr = coloringString(str1, str2);
console.log(finishAr);

function coloringString(str1, str2) {
    let ar = Array.from(str1);
    let ar2 = Array.from(str2);
    const resAr = [];
    if (ar.length === ar2.length) {
        for (i = 0; i < ar2.length; i++) {
            if (ar.indexOf(ar2[i]) === -1) { resAr.push("red"); }
            else if (ar.indexOf(ar2[i]) != i && ar[i] != ar2[i]) { resAr.push("yellow"); }
            else if (ar[i] === ar2[i]) { resAr.push("green"); }
        }
    }
    return resAr;
}
//  1 - B
let str3 = "pappy";
let str4 = "pappy";
const control = coloringString2(str3, str4);
console.log(control);

function coloringString2(str3, str4) {
    let ar3 = Array.from(str3);
    let ar4 = Array.from(str4);
    if (ar3.length != ar4.length) { console.log(Error); }
    const res = ar4.map(function (number, index) {
        if (ar3.indexOf(number) === -1) { return "red"; }
        else if (ar3.indexOf(number) != index && number != ar3[index]) { return "yellow"; }
        else if (number === ar3[index]) { return "green"; }
    })
    return res;
}

//ex2 
let number_of_digits = 2;
let starting_array = [1, 100, -100, 25, 1000, -32, 22, 16, -17];
let controlArray = getNumbersWithDigitsAmount(number_of_digits, starting_array);
console.log(controlArray);

function getNumbersWithDigitsAmount(digitsAmount, array) {
    let number_of_digits = digitsAmount;
    const res = array.filter(function (number) {
        if (number < 0) { number = -number; }
        number = String(number);
        if (number.length === number_of_digits)
            return Number(number);
    });
    return res;
}