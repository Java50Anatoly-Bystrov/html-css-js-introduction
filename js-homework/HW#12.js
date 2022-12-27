// Exercise 1
function myParseInt(str, base) {
    base = base || 10;
    let res = 0;
    let index = str[0] === "-" ? 1 : 0;
    if ((str[0] === "-") & (base <= 10)) {
        for (let i = 1; i < str.length; i++) {
            if (getCode(str[i]) <= 9) { res = res * base + getCode(str[i]); }
            else break;
        }
        return res = - res;
    }

    else if ((str[0] === "-") & (base > 10)) {
        for (let i = 1; i < str.length; i++) {
            res = res * base + getCode(str[i]);
        }
        return res = - res;
    }

    else if (base <= 10) {
        for (let i = 0; i < str.length; i++) {
            if (getCode(str[i]) <= 9) { res = res * base + getCode(str[i]); }
            else break;
        }
        return res;
    }

    else {
        for (let i = 0; i < str.length; i++) {
            res = res * base + getCode(str[i]);
        }
        return res;
    }
}
function getCode(symbol) {
    symbol = symbol.toLowerCase();
    const codeA = "a".charCodeAt();
    const res = symbol <= "9" ? +symbol : symbol.charCodeAt() - codeA + 10;
    return res;
}

let str1 = "-ff";
let str2 = "123";
let str22 = "Java";
let str3 = "123mmm";
let str4 = "123.5";
let str5 = "-123.54";
let str6 = "-123";
let num = parseInt(str1, 16);
let Mynum = myParseInt(str1, 16);
console.log(num, "=", Mynum);
let num1 = parseInt(str2);
let Mynum1 = myParseInt(str2);
console.log(num1, "=", Mynum1);
let num2 = parseInt(str22, 36);
let Mynum2 = myParseInt(str22, 36);
console.log(num2, "=", Mynum2);
let num3 = parseInt(str3);
let Mynum3 = myParseInt(str3);
console.log(num3, "=", Mynum3);
let num4 = parseInt(str4);
let Mynum4 = myParseInt(str4);
console.log(num4, "=", Mynum4);
let num5 = parseInt(str5);
let Mynum5 = myParseInt(str5);
console.log(num5, "=", Mynum5);
let num6 = parseInt(str6);
let Mynum6 = myParseInt(str6);
console.log(num6, "=", Mynum6);

//Exercice 2

function myToString(number, base) {
    let minus = number < 0 ? '-' : '';
    number = Math.abs(number);
    number = "" + number;
    const myArray = number.split(".");
    let whole = parseInt(myArray[0]);
    let fraction = parseInt(myArray[1]);
    let res1 = "";
    let res2 = "";
    base = base || 10;
    do {
        const digit = whole % base;
        const symbol = getSymbol(digit);
        res1 = symbol + res1;
        whole = Math.trunc(whole / base);
    } while (whole);
    if (number % 1 != 0) {
        do {
            const digit = fraction % base;
            const symbol = getSymbol(digit);
            res2 = symbol + res2;
            fraction = Math.trunc(fraction / base);
        } while (fraction);
    }
    let res = number % 1 != 0 ? (res1 + "." + res2) : res1;
    if (minus == "-")
        res = minus + res;
    return res;
}

function getSymbol(digit) {
    const codeA = "a".charCodeAt();
    let symbol;
    if (digit < 10) { symbol = "" + digit; }
    else {
        const codeAscii = digit - 10 + codeA;
        symbol = String.fromCharCode(codeAscii);
    }
    return symbol;
}

let num100 = 990500;
let str100 = num100.toString();
let myStr100 = myToString(num100);
console.log(str100, "=", myStr100);
let Str100 = num100.toString(36);
let MyStr100 = myToString(num100, 36);
console.log(Str100, "=", MyStr100);
let num1000 = 123.45;
let str1000 = num1000.toString();
let myStr1000 = myToString(num1000);
console.log(str1000, "=", myStr1000);
let num10000 = -123;
let str10000 = num10000.toString();
let myStr10000 = myToString(num10000);
console.log(str10000, "=", myStr10000);
let num10001 = -123.45;
let str10001 = num10001.toString();
let myStr10001 = myToString(num10001);
console.log(str10001, "=", myStr10001);