
/* for (let i = 1; i<=6; i++){
    console.log("* ".repeat(i))
} */

/* for (let i = 6; i>=1; i--){
    console.log("* ".repeat(i))
} */
/* 
for (var line = "#"; line.length < 8; line += "#")
console.log(line); */


    /** --------------

                    *
                   **
                  ***
                 ****
                *****
               ******
              *******
             ********
            *********


            ----------------*/

let str = "";
for(let i = 1; i<10; i++){
    for(let j = 1; j<10; j++){
        if(i+j>=10){
            str = str.concat("*")
        }
        else{
            str = str.concat(" ")
        }
    }
    str = str.concat("\n")
}
console.log(str)