let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("2.txt").toString().split("\n");

const tt = parseInt(input[0], 10); // 테스트 케이스 수
let index = 1; // 현재 input에서 읽어야 할 줄의 인덱스

const solve = () => {
  const n = parseInt(input[index], 10); // 현재 테스트 케이스의 n 값
  index++;

  const results = [];
  for (let i = 0; i < n; i++) {
    const [x, y] = input[index].split(" ").map(Number); // x와 y 값 읽기
    index++;
    results.push(`${i + 1} ${x + 1} ${y + 100000001}`); // 출력 형식 맞추기
  }
  console.log(results.join("\n")); // 테스트 케이스 결과 출력
};

// 메인 함수
for (let t = 0; t < tt; t++) {
  solve();
}
