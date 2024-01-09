function solution(citations) {
    var answer = 0;
    let 기준;
    let cnt;
    let max = 0;
    
    for(let i=0;i<citations.length;i++){
        기준 = citations[i];
        cnt = 0;
        for(let j=0;j<citations.length;j++){
            if(기준<=citations[j])cnt++;
        }
        if(cnt<=기준 && max<cnt){
            answer = cnt;
            max = cnt;
        }
    }
    
    return answer;
}