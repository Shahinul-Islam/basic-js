
var num = prompt('input any posisitive numbe : ');
num = parseInt(num);
if(num>0 || num == 0){
   
    if(num==0){
        document.write("You have enterd zero");
    }
       else if( num % 2 == 0 ){
        document.write(num + " is a Even Number");
    }
    else{
        document.write(num + " is a Odd Number");
    }
}
else{
    document.write("Please Enter a Positive Number");
}