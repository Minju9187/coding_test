function solution(X, Y) {
    var answer = '';
    let arr_X = X.split("");
    let arr_Y = Y.split("");
    let cnt_X;
    let cnt_Y;
    let min_XY;
    let word;
    
    for(let i=9;i>=0;i--){
        cnt_X = arr_X.filter(v=>v===i.toString()).length;
        cnt_Y = arr_Y.filter(v=>v===i.toString()).length;
        min_XY = Math.min(cnt_X,cnt_Y);
        answer = answer.concat(i.toString().repeat(min_XY));
    }
    if(answer === '')answer = '-1';
    else if(answer[0] === '0') answer = '0';
    return answer;
}