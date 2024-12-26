let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("1.txt").toString().split("\n");

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const W = input[2 * i].trim();
  const K = Number(input[2 * i + 1]);
  findWordLength(W, K);
}

function findWordLength(W, K) {
  const obj = {};
  const words = [];

  for (let i = 0; i < W.length; i++) {
    if (!obj[W[i]]) {
      obj[W[i]] = [i];
    } else {
      obj[W[i]].push(i);
    }
  }

  Object.values(obj).forEach((v) => {
    if (v.length >= K) {
      for (i = 0; i < v.length - K + 1; i++) {
        words.push(v[i + K - 1] - v[i] + 1);
      }
    }
  });

  if (words.length === 0) {
    console.log(-1);
  } else {
    words.sort((a, b) => a - b);
    console.log(words[0] + " " + words[words.length - 1]);
  }
}
