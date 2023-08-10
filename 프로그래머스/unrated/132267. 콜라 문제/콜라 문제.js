function solution(a, b, n) {
    var answer = 0;
    let quotient; //몫
    let remainder; //나머지
    while(true){
        quotient = parseInt(n/a);
        remainder = n%a;
        answer += quotient*b;
        n = quotient * b + remainder;
        if(n<a)break;
    }
    return answer;
}