function solution(N, stages) {
    let answer = [];
    let arr = {};
    let failRate = [];
    let personNum = stages.length;
    let arr1 = [];
    
    for(let i=0;i<=N+1;i++){
        arr[i]=0;
    }
    for(let i=0;i<stages.length;i++){
        if(stages[i]>N)arr[N+1]++;
        else arr[stages[i]]++;
    }
    for(let i=1;i<=N;i++){
        failRate.push(arr[i]/personNum);
        personNum -= arr[i];
    }
    let mapFailRate = failRate.map((v,i)=>{
        return {stage:i,failR:v}
    })
    mapFailRate.sort((a,b)=>b.failR-a.failR)
    answer = mapFailRate.map((v,i)=>v.stage+1);
    return answer;
}
