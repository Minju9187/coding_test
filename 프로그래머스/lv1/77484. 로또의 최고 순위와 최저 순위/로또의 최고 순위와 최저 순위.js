function solution(lottos, win_nums) {
    var answer = [];
    let cnt = 0; //겹치는 숫자 확인
    let cnt1 = 0; //0갯수 확인
    let a,b;
    
    lottos.sort((a,b)=>a-b,0);
    win_nums.sort((a,b)=>a-b,0);
    for(let i=0;i<win_nums.length;i++){
        for(let j=0;j<lottos.length;j++){
            if(win_nums[i]===lottos[j]){
                cnt++;
            }
        }
    }
    for(let i=0;i<lottos.length;i++){
        if(lottos[i]===0){
            cnt1++;
        }
    }
    a=7-cnt-cnt1;
    b=7-cnt;
    if(a>6){
        a=6;
    }
    if(b>6){
        b=6;
    }
    answer.push(a,b);
    return answer;
}