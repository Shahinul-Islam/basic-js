let strings = "javascriptloops";
let vowels = [];
let consonant = [];
for (let i = 0; i <= strings.length - 1; i++) {
  let elements = strings[i];
  if (
    elements == "a" ||
    elements == "e" ||
    elements == "i" ||
    elements == "o" ||
    elements == "u"
  ) {
    vowels.push(elements);
  } else {
    consonant.push(elements);
  }
}
let finaleArray = vowels + consonant;
let text = finaleArray.toString();
for (let j = 0; j < text.length; j++) {
  console.log(text[j]);
}
