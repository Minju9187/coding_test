function solution(n) {
    var answer = 0;
    let a = 1, b = 1;
    if(n===1)return 1;
    else {
        for(let i=1;i<n;i++){
            answer = (a + b)%1234567;
            a = b;
            b = answer;
        }
    }
    return answer;
}