
function getFactorial(number){
    let factorial = 1;
    for(let i = number; i>=1; i--){
        factorial = factorial * i;
    }
    return factorial;
}

let myFactorial = getFactorial(5);
console.log(myFactorial)