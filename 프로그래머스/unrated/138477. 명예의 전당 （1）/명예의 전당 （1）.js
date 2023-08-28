function solution(k, score) {
    var answer = [];//명예의 전당
    var result = [];
    for(let i=0;i<score.length;i++){
        if(i<k){
            answer.push(score[i]);
        }else if(i >= k && Math.min(...answer)<score[i]){
            answer[k-1]=score[i];
        }
        answer.sort((a,b)=>b-a);
        result.push(Math.min(...answer));
    }
    return result;
}