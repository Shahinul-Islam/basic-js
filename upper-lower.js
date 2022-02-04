//একটি বাক্য নিয়ে দেখতে হবে । সেই বাক্যে প্রতিটা latter uppercase না কি lowercase । যদি uppercase latter এর সংখ্যা বেশি হয় তাহলে বাক্যটার সব গুলো latter uppercase হবে। আর যদি lowercase latter এর সংখ্যা বেশি হয় তাহলে সব গুলো latter lowercase করে দিতে হবে। আর যদি সমান হয় তাহলে যেটা input দিয়েছেন সেটাই print হবে .
let sentence = "BaNGLAdesH IS My HOMe CountrYlAND";
let uppercaseValue = 0;
let lowercaseValue = 0;

for (let i = 0; i < sentence.length; i++) {
  let elements = sentence.charCodeAt(i);
  if (elements > 64 && elements < 91) {
    uppercaseValue++;
  } else {
    lowercaseValue++;
  }
}
if (uppercaseValue > lowercaseValue) {
  sentence = sentence.toUpperCase();
  console.log(sentence);
} else {
  sentence = sentence.toLowerCase();
  console.log(sentence);
}
