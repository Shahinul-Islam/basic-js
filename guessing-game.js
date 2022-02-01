
let num = parseInt(prompt("Enter your number: "))


let guessNumber = 10*(Math.random());
guessNumber = Math.floor(guessNumber);

let result = (num == guessNumber)? 'You win':'You lost'
console.log(result);