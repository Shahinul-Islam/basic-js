// digit spelling program 
// 0 - zero, 1 - one, 2 - two ..... 
// if anything 0 to 9, it will be not valid

var digit = prompt('Enter a digit : ')
// digit = parseInt(digit);

switch(digit){
    case "0":
        document.write("Zero")
        break;
    case "1":
        document.write("One")
        break;
    case "2":
        document.write("Two")
        break;
    case "3":
        document.write("Three")
        break;
    case "4":
        document.write("Four")
        break;
    case "5":
         document.write("Five")
         break;
    case "6":
         document.write("Six")
         break;
    case "7":
         document.write("Seven")
         break;
    case "8":
         document.write("Eight")
         break;
    case "9":
         document.write("Nine")
         break;
    default:
        document.write('Not a Digit, Thank You')
}