let fs = require("fs");
const input = fs
  .readFileSync(fs.existsSync("/dev/stdin") ? "/dev/stdin" : "1.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const arr = input.map((v) => v.split(" ").map(Number));

let answer = 0;
const dp = new Array(N + 1).fill(0);
let max = 0;

for (let i = 0; i < N; i++) {
  max = Math.max(max, dp[i]);
  const [day, pay] = arr[i];
  if (i + day <= N) dp[i + day] = Math.max(dp[i + day], max + pay);
}

answer = Math.max(...dp);

console.log(answer);