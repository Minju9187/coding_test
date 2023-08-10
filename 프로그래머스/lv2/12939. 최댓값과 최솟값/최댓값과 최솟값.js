function solution(s) {
    var answer = '';
    let min,max;
    let arr,numArr;
    arr = s.split(" ");
    answer+=Math.min(...arr);
    answer+=(" ");
    answer+=Math.max(...arr);
    return answer;
}

//Javascript에서 배열의 문자를 숫자로 변환하는 법 https://programming4myself.tistory.com/41