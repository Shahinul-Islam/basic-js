function dailyCompoundInterest(principle, rate, time){
 return (principle*((1+(rate/36500))**(time*365)))-principle;
 
}
let myCompoundRate = dailyCompoundInterest(8000, 6, 2)
console.log(myCompoundRate)