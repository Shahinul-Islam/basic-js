var letter = prompt("enter any letter : ");
letter = letter.toLowerCase();

switch (letter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    document.write("Vowel");
    break;
  default:
    document.write("Consonant");
    break;
}
