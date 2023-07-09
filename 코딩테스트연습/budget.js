//https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  var answer = 0;
  var sum = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum > budget) {
      break;
    }
    answer += 1;
  }

  return answer;
}
// 참고 : https://hianna.tistory.com/409
//처음에는 d.sort()를 사용하였는데 오류가 남
// 이유 : sort는 유니코드 기준으로 정렬하기 때문에 d.sort((a, b) => a - b) 이것을 사용하는게 정확하다.
