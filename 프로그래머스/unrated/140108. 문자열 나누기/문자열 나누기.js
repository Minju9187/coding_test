function solution(s) {
    var answer = 0;
    let cnt1 = 0;
    let cnt2 = 0;
    for(let i=0;i<s.length;i++){
        cnt1=0;
        cnt2=0;
        for(let j=i;j<s.length;j++){
            if(s[i]===s[j])cnt1++;
            else cnt2++;
            
            if(cnt1===cnt2){
                i=j;
                answer++;
                break;
            }
            else if(j===s.length-1&&cnt1>cnt2){
                answer++;
                return answer;
            }
        }
    }
    return answer;
}