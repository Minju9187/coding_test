function solution(n, t, m, p) {
    var answer = '';
    let content = "";
    
    for(let i=0;i<=t*m;i++){
        content += i.toString(n).toUpperCase();
    }
    for(let i=0;i<t;i++){
        answer += content[m * i + p - 1]
    }
    return answer;
}