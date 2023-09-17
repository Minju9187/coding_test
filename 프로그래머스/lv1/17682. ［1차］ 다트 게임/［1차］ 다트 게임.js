function solution(dartResult) {
    var answer = 0;
    let arr_dartResult = dartResult.split('');
    let arr_score = [];
    let arr_score2= [];
    let cnt = -1;
    
    for(let i=0;i<arr_dartResult.length;i++){
        if(arr_dartResult[i]>=0 && arr_dartResult[i]<=10){
            //숫자가 10경우 1 0이 되어서 10으로 처리
            if(arr_dartResult[i+1]==='0'){
                arr_dartResult[i+1]=10;
                i++;
            }
            if(arr_dartResult[i+1]==='S'){
                arr_score.push(arr_dartResult[i]);
            }
            else if(arr_dartResult[i+1]==='D'){
                arr_score.push(Math.pow(arr_dartResult[i],2));
            }
            else if(arr_dartResult[i+1]==='T'){
                arr_score.push(Math.pow(arr_dartResult[i],3));
            }
            i++;
        }
        else{
            arr_score.push(arr_dartResult[i]);
        }
    }
    for(let i=0;i<arr_score.length;i++){
        if(!isNaN(arr_score[i])){
            arr_score2.push(arr_score[i]);
            cnt++;
        }
        if(arr_score[i]==='#'){
            arr_score2[cnt]*=(-1);
        }
        else if(arr_score[i]==='*'){
            if(cnt === 0){
                arr_score2[cnt]*=2;
            }
            else{
                arr_score2[cnt-1]*=2;
                arr_score2[cnt]*=2;
            }
        }
    }
    answer = arr_score2.reduce((a,b)=>a+parseInt(b),0);
    return answer;
}