let num = 2;
let notPrime = 0;

for (let i = 2; i < num; i++){
    //let i=5, if i%(i-1)==0 i%(i-2)==0 or i%(i-3)==0 not a prime number else prime number
    if(num % i == 0){
        notPrime++
    }
}
if(notPrime > 0 ){
    console.log("Not Prime Number")
}
else{
    console.log("Prime Number")
}