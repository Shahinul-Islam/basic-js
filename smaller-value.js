
function arraySorting(myArray){
    let num = myArray.sort(function(a,b){
        return a-b;
    });
    return num[0];
}
let numbers = arraySorting([12,5,34,57,12,59,99])
console.log(numbers);
