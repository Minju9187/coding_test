function solution(num, total) {
    var answer = [];
    let a;
    if(num%2==1){
        a = total/num - parseInt(num/2)
    }
    //total/2 -> 가운데 두개의 합
    //a, a + 1로 생각하면 2a + 1 = total/2
    else{
        a = (total/(num/2) - 1)/2 - (num/2-1);
    }
    for(let i=0;i<num;i++){
        answer[i] = a + i;
    }
    return answer;
}