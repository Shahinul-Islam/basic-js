
let number1 = Number(prompt("Enter 1st number : "));
let number2 = Number(prompt("Enter 2nd number : "));
let number3 = Number(prompt("Enter 3rd number : "));

let result = number1 > number2 && number1 > number3 ? number1 : number2 > number1 && number2 > number3 ? number2: number3;

document.write(" " + result)