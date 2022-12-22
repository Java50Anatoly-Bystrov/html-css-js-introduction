// No 1 
let num = 123.45;
let num1 = -280.123;
let num2 = 123;
let sum = getDigitsum(num);
let sum1 = getDigitsum(num1);
let sum2 = getDigitsum(num2);

function getDigitsum(number) {
    number = Math.round(number);
    if (number < 0) { number = -number; }
    let res = 0;
    do {
        res = Math.trunc(res + number % 10);
        number = Math.trunc(number / 10);
    } while (number != 0);
    return res;
}
console.log("res1 =", sum);
console.log("res2 =", sum1);
console.log("res3 =", sum2);

// No 2
let string = ("9000 / ((10 + 20) ** 2)");
let string1 = ("9 + 100 / 2");
console.log(eval(string));
console.log(eval(string1));

// No 3
let ananas = "a" + "tol" / 2 + "a" + "s";
console.log(ananas.toLocaleLowerCase());

// No 4
let reverse = PrintReverse(123.45);
let reverse1 = PrintReverse(-280.123);
let reverse2 = PrintReverse(123456);
let reverse3 = PrintReverse(-123);
function PrintReverse(number) {
    number = Math.trunc(number);
    let a = 0;
    let res = " ";
    if (number < 0) {
        number = -number;
        res = "-"
    };
    do {
        a = number % 10;
        res = res + a;
        number = Math.trunc(number / 10);
    } while (number != 0);

    return res;
}
console.log(reverse);
console.log(reverse1);
console.log(reverse2);
console.log(reverse3);