//https://school.programmers.co.kr/learn/courses/30/lessons/68935
function solution(n) {
    var answer = 0;
    var str3,str3_reverse;

    str3 = n.toString(3);
    //reverse 사용, 
    str3_reverse = str3.split("").reverse().join("");

    answer = Number.parseInt(str3_reverse, 3);
    return answer;
}

//진법 변환 10진법 -> 다른진법 & 다른진법 -> 10진법 변환 방법 https://medium.com/web-dev-note/javascript-%EC%A7%84%EB%B2%95-%EB%B3%80%ED%99%98-330694083495

//reverse사용법 https://www.freecodecamp.org/korean/news/how-to-reverse-a-string-in-javascript-in-3-different-ways/
