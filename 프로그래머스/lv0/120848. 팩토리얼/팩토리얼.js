function solution(n) {
    var answer = 0;
    let i=1;
    while(true){
        n = parseInt(n/i);
        if(n<1){
            answer = i-1;
            break;
        }
        i++
    }
    return answer;
}