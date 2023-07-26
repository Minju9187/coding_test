function solution(arr, query) {
    var answer = [];
    for(let i=0;i<query.length;i++){
        if(i%2==0){
            arr.splice(query[i]+1,arr.length-1-query[i]);
        }
        else{
            arr.splice(0,query[i]);
        }
    }
    answer=arr;
    return answer;
}