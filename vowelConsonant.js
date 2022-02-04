let str = "javascriptloops";
let vowels = "";
let consonant = "";
for (let i = 0; i < str.length; i++) {
  let elements = str[i];
  switch (elements) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      vowels = vowels + elements;
      break;
    default:
      consonant = consonant + elements;
  }
}
let updatedStr = vowels + consonant;
for (let j = 0; j < updatedStr.length; j++) {
  console.log(updatedStr[j]);
}
