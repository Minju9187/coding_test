function solution(babbling) {
    var answer = 0;
    answer = babbling.map( v => v.replace(/aya|ye|woo|ma/g,'')).filter(word=>word.length==0).length;
    return answer;
}