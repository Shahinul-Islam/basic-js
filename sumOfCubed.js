let num = [12, 4, 6, 33, 76, 30, 98, 56]
let sum = 0;

for (let i = 0; i < num.length; i++) {
    let element = Math.pow(num[i],3);
    sum = sum + element;
}
console.log(sum)