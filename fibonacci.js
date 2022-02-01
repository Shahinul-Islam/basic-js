//10th = (10-1)th + (10-2)th
//fibonacci equation : nth = (n-1)th + (n-2)th

function fibonacciSeries(num){
    const fibo = [0,1];
    if(typeof num != 'number'){
        return "Error! Please Enter Any number above 1";
    }
    if(num <= 1){
        return "Error! Please Enter Any number above 1";
    }
    for(let i = 2; i<=num; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
 }
 return fibo;
}

let myFibo = fibonacciSeries(1);
console.log(myFibo)