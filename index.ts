let chestBoard = "";

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 4; j++) {
    chestBoard += "██";
    chestBoard += "  ";
  }
  chestBoard += "\n";
  for (let k = 1; k <= 4; k++) {
    chestBoard += "  ";
    chestBoard += "██";
  }
  chestBoard += "\n";
}
console.log(chestBoard);