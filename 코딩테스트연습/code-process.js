function solution(code) {
  var answer = "";
  let key = 0;
  for (let i = 0; i < code.length; i++) {
    if (i % 2 == key && code[i] != 1) {
      answer += code[i];
    }
    if (code[i] == 1) {
      key = key == 1 ? 0 : 1;
    }
  }

  if (answer === "") {
    answer = "EMPTY";
  }

  return answer;
}
