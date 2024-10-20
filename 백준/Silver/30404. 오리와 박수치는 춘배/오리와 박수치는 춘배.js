const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
readline
  .on("line", (line) => {
    input.push(line.trim());
    if (input.length === 2) {
      readline.close();
    }
  })
  .on("close", () => {
    const result = solution(input);
    console.log(result);
    process.exit();
  });

const solution = (input) => {
  const [n, k] = input[0].split(" ").map(Number);
  const quacks = input[1].split(" ").map(Number);
  let ans = 0;
  let lastClapTime = -1;

  for (let i = 0; i < n; i++) {
    let quack = quacks[i];

    if (quack > lastClapTime) {
      ans += 1;
      lastClapTime = quack + k;
    }
  }
  return ans;
  //   const [count, time] = input[0].split(" ").map(Number);
  //   const arr = input[1].split(" ").map(Number);
  //   let cnt = 0;

  //   for (let i = 0; i < count; i++) {
  //     if (arr[i] + time >= arr[i + 1]) {
  //       console.log(i);
  //       i++;
  //     }
  //     cnt++;
  //   }
  //   return cnt;
};
