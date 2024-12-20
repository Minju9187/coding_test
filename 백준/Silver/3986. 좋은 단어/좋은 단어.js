let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("1.txt").toString().split("\n");

const N = input.shift();
let cnt = 0;

for (let i = 0; i < N; i++) {
  const str = input[i].trim();
  if (str.length % 2 !== 0) continue;
  if (checkGoodWord(str)) cnt++;
}

console.log(cnt);

function checkGoodWord(str) {
  const stack = [];
  for (let char of str) {
    if (
      stack.length > 0 &&
      ((stack[stack.length - 1] === "A" && char === "A") ||
        (stack[stack.length - 1] === "B" && char === "B"))
    ) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

// function checkGoodWord(str) {
//   while (true) {
//     const copyStr = str.replace(/AA|BB/g, "");
//     if (copyStr === str) return copyStr;
//     str = copyStr;
//   }
// }
