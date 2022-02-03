let friends = [
  "abul",
  "babul",
  "kabul",
  "abul",
  "sabul",
  "tabul",
  "sabul",
  "abul",
  "mamul",
  "kabul",
];
let temp = [];
for (let i = 0; i < friends.length; i++) {
  let check = friends[i];
  if (temp.indexOf(check) == -1) {
    temp.push(check);
  }
}

console.log(temp);
