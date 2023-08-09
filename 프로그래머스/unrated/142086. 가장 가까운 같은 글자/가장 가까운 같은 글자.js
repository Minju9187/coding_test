function solution(s) {
    var answer = [];
    let arr = s.split("");
    for(let i=0;i<s.length;i++){
        if(arr.indexOf(arr[i])==i){
            answer.push(-1);
        }
        else{
            for(let j=i-1;j>=0;j--){
                if(arr.indexOf(arr[i],j) != i){
                    answer.push(i-j)
                    break;
                }
            }
        }
    }
    return answer;
}