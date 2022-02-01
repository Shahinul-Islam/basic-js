
function interestCalc(amount, interestRate, time){
    return (amount*interestRate*time)/100
}

let total = interestCalc(10000, 5, 5);

console.log(total)