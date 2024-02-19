function solution(land) {
    var answer = 0;
    let arr = [];
    let value, idx, beforeIdx;
    for(let i = 0 ; i < land.length ; i++){       
        if(i===0){
            value = Math.max(...land[i]);
            idx = land[i].findIndex(v => v===value);
        }else{
            value = Math.max(...land[i]);
            idx = land[i].findIndex(v => v===value);
            if(beforeIdx === idx){
                land[i].splice(idx,1);
                value = Math.max(...land[i]);
                idx = land[i].findIndex(v => v===value);
            }
        }
        answer += value;
        beforeIdx = idx;
    }
    return answer;
}