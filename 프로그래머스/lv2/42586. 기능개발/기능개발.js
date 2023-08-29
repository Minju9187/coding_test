function solution(progresses, speeds) {
    var answer = [];
    let a;
    let num;
    for(let i=0;i<progresses.length;i++){
        num = 0;
        if(progresses[i]<100){
            a = Math.ceil((100-progresses[i])/speeds[i]);
            for(let j = i;j<progresses.length;j++){
                progresses[j]+=speeds[j]*a;
            }
            for(let k = i;k<progresses.length;k++){
                if(progresses[k]>=100){
                    num++;
                }
                else break;
            }
            answer.push(num);
        }
    }
    return answer;
}