function solution(prices) {
    var answer = [];
    let num = 0;
    for(let i =prices.length-1;i>=0;i--){
        num = 0;
        for(let j = i;j<prices.length;j++){
            if(prices[i]>prices[j]){
                num=j-i;
                break;
            }
        }
        if(num == 0){num = prices.length-i-1};
        answer.push(num);
    }
    answer.reverse();
    return answer;
}