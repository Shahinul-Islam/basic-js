function animalCount(miles){
    if (typeof miles != 'number') {
        return "enter positive valid number"
    }
    else if (miles < 0) {
        return "Enter number above 0";
    }
    else if (miles <=10) {
        const counts = miles * 10;
        return counts;
    }
    else if (miles > 10) {
        counts = 100 + (miles - 10) * 50;
        return counts;
    }
    /* else{
        return "valid positive value";
    } */
}

let animals = animalCount(14);
console.log(animals);