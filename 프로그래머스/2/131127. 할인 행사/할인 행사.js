function solution(want, number, discount) {
    var answer = 0;
    let wantObj = {};
    let discountObj = {};
    let cnt;
    
    for(let i=0;i<want.length;i++){
        wantObj[want[i]] = number[i];
    }
    
    for(let i=0;i<discount.length-9;i++){
        discountObj = {};
        for(let j=0;j<10;j++){
            if(!discountObj[discount[i+j]])discountObj[discount[i+j]]=1 ;
            else discountObj[discount[i+j]]++;
        }
        cnt=0;
        for(let i=0;i<want.length;i++){
            if(wantObj[want[i]]===discountObj[want[i]])cnt++;
            else break;
        }
        if(cnt===want.length)answer++;
    }
    
    return answer;
}