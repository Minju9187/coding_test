function solution(number, limit, power) {
    var answer = 0;
    
    for(let i=1;i<=number;i++){
        answer += divisorNum(i,limit,power);
    }
    return answer;
}
    
function divisorNum(num,limit,power){
    let cnt = 0;
    for(let i=1;i*i<=num;i++){
        if(i*i==num) cnt+=1;
        else if(num%i===0){
            cnt+=2;
        }
        
        if(cnt>limit) return power;
    }
    return cnt;
}