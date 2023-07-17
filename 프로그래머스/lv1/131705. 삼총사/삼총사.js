function solution(number) {
    var answer = 0;
    let result = 0;
    // number.sort((a,b) => a - b);
    for(let i=0;i<number.length;i++){
        result = 0;
        for(let j=i+1;j<number.length;j++){
           // if(result < number[i]+number[j])continue;
            for(let k=j+1;k<number.length;k++){
               // if(result < number[i]+number[j]+number[k])continue;
                if(result == number[i]+number[j]+number[k]){
                    answer+=1;
                }
            }
        }
    }
    return answer;
}