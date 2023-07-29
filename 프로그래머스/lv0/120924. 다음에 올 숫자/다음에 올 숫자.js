function solution(common) {
    var answer = 0;
    if(2*common[1] == common[0] + common[2]){
        answer = common[common.length-1]+(common[1]-common[0]);
    }
    else if(common[1]*common[1] == common[0]*common[2]){
        answer = common[common.length-1]*(common[1]/common[0]);
    }
    return answer;
}