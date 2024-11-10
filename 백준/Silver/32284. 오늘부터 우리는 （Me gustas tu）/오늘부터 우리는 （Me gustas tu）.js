let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("예제.txt").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const [a, b] = input[1].split(" ").map(Number);

function printWind(i, j, x, y) {
  if (i > x) return "N";
  if (i < x) return "S";
  if (j > y) return "W";
  return "E";
}

function solve() {
  let result = "";

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      result += printWind(i, j, a, b);
    }
    result += "\n";
  }

  console.log(result);
}

solve();