
let num = new Array()
for(var i = 0; i<5; i++){
    num[i] = prompt("enter a number = ");
}
let sum = 0;

for(var i = 0 ; i < 5; i++){
    num[i] =parseInt(num[i]);
    console.log(num[i])
    sum = sum + num[i]
}
console.log(sum);

