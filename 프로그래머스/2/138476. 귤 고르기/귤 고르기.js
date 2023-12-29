function solution(k, tangerine) {
    var answer = 0;
    let type = {};
    let cnt = [];
    let sum = 0,i=0;
    tangerine.forEach(v=>{
        if(type[v]>=1)type[v]++;
        else type[v]=1;
    })
    cnt = Object.values(type);
    cnt.sort((a,b)=>b-a);
    while(true){
        sum+=cnt[i];
        answer++;
        if(sum>=k)break;
        i++;
    }
    return answer;
}