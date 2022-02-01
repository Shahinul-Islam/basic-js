
//adding a constructor to create a template to avoide duplication of creating multiple object with name property

function Students(name,age, sex, cgpa, language){//created constructor
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.cgpa = cgpa;
    this.language = language;

    this.display = function(){//created function constructor
        console.log(this.name)
        console.log(this.age)
        console.log(this.sex)
        console.log(this.cgpa)
        console.log(this.language)
    }
}

let student1 = new Students("anisul islam",34,"male",3.45,["bangla","hindi", "english"])
let student2 = new Students("shahinul islam",30,"male",3.85,["bangla","spanish", "english"])
let student3 = new Students("robiul islam",32,"male",3.43,["bangla","urdu", "english"])

student1.display();
student2.display();
student3.display();





// let student1 = {
//     name:"Shahinul Islam",
//     age : 28,
//     sex : "male",
//     cgpa : 3.45,
//     language : ["bangla", "english", "hindi"]
// }

// let student2 = {
//     name:"Robiul Islam",
//     age : 27,
//     sex : "male",
//     cgpa : 3.75,
//     language : ["english", "spanish", "hindi"]
// }


// let student3 = {
//     name:"Sultana Rejeya",
//     age : 26,
//     sex : "female",
//     cgpa : 3.50,
//     language : ["bangla", "english", "urdu"]
// }


// console.log(student2.name)