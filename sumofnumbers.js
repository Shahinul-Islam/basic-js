
//write a program that will print the sum of 1 to 100 those are divided by zero with modulas zero

let sum = 0;

for( var i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        let value = i;
        document.write(" " + value + "     ");
        sum = sum + value;
        document.write(sum + "</br>")
    }
    else{
        document.write(" ")
    }
}