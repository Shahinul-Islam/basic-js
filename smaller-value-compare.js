
let num = [12, 4, 6, 33, 76, 30, 98, 56]
for (let i = 0; i < num.length; i++) {
    if(num[i]>num[i+1]){
        let temp = num[i];
        num[i] = num[i+1];
        num[i+1] = temp;
    }
    
}
console.log(num[num.length-1]);

