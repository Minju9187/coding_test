function solution(s) {
    var answer = '';
    let arr;
    arr = s.split(" ");
    answer+=Math.min(...arr);
    answer+=(" ");
    answer+=Math.max(...arr);
    return answer;
}