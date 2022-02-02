
let myCart = [
    {name:'phone', price:24000, quantity: 2},
    {name:'laptop', price:47000, quantity: 1},
    {name:'shirt', price:500, quantity: 7},
    {name:'pant', price:720, quantity: 4},
    {name:'watch', price:2400, quantity: 3},
]

let total = 0;
myCart.forEach(element => {
    let priceWithquantity = element.price * element.quantity;
total = total + priceWithquantity;
});
console.log(total);