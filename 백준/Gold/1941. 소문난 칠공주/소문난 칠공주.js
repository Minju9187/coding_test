const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(String));

let answer = 0;
let select = new Array(7);
let arr = new Array(5);

const isAdjacent = (array) => {
  let visited = new Array(7).fill(false);

  let queue = new Array();
  queue.push(array[0]);
  visited[0] = true;
  let cnt = 1;

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  while (queue.length !== 0) {
    const cur = queue.shift();
    const cx = cur % 5;
    const cy = Math.floor(cur / 5);
    for (var i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];
      if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
        for (var j = 0; j < 7; j++) {
          if (
            array[j] % 5 == nx &&
            Math.floor(array[j] / 5) == ny &&
            !visited[j]
          ) {
            cnt++;
            visited[j] = true;
            queue.push(array[j]);
          }
        }
      }
    }
  }
  if (cnt === 7) return true;
  else return false;
};

const checkSY = (array) => {
  let cnt = 0;
  for (var i = 0; i < 7; i++) {
    const cur = array[i];
    if (arr[cur % 5][Math.floor(cur / 5)] === "S") cnt++;
  }
  if (cnt >= 4) return true;
  else return false;
};


const pick = (idx, sIdx) => {
  if (sIdx === 7) {
    if (checkSY(select) && isAdjacent(select)) {
      answer++;
    }
    return;
  }

  if (idx === 25) {
    return;
  }

  select[sIdx] = idx;
  pick(idx + 1, sIdx + 1);
  pick(idx + 1, sIdx);
};

const solution = () => {

  for (var i = 0; i < 5; i++) {
    arr[i] = input[i][0].split("");
  }
  pick(0, 0);
  console.log(answer);
};

solution();