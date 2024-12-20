let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("3.txt").toString().split("\n");

const N = input.shift();

for (let i = 0; i < N; i++) {
  checkLevel(BigInt(input[i].trim()));
}

function checkLevel(num) {
  const EXP = (num * (num + 1n)) / 2n;
  let left = 1n;
  let right = 1000000000n;

  while (left <= right) {
    const mid = (left + right) / 2n;
    if (mid * (mid + 1n) <= EXP) {
      left = mid + 1n;
    } else {
      right = mid - 1n;
    }
  }

  console.log(left.toString());
}
