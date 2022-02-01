var num = new Array()
for(var i = 0; i<5; i++){
    num[i] = parseInt(prompt("enter five numbers: "));
}
num = num.sort(function(a,b){
    return a-b;
})

console.log(num[(num.length-1)])