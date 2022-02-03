//print all the prime numbers between 1 to 100

function primeSeries(num) {
    for(let i = 0; i<=num; i++){
        let flag = 0;
        if(i<2){
            flag=1;
        }
        for(j=2; j<i; j++){
            if(i%j==0){
                flag=1;
                break
            }
        }
        if(flag==0){
            console.log(i)
        }
    }
}
let num = 100;
primeSeries(num);