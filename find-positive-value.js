let num = [12,21,444,22, -4, 5, -45, 32, 74, 88, -30];
let negative = [];
let positive = [];
for (const numbers of num) {
    if (numbers > 0) {
        positive.push(numbers);
    }
    else{
        break;
    }
}
console.log(negative)
console.log(positive)