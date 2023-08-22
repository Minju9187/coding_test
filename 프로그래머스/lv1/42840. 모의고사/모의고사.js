function solution(answers) {
    var answer = [];
    let a1 = [1,2,3,4,5];
    let a2 = [2,1,2,3,2,4,2,5];
    let a3 = [3,3,1,1,2,2,4,4,5,5];
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let max;
    for(let i=0;i<answers.length;i++){
        if(answers[i]==a1[i%a1.length]){
            num1++;
        }
        if(answers[i]==a2[i%a2.length]){
            num2++;
        }
        if(answers[i]==a3[i%a3.length]){
            num3++;
        }
    }
    max = num1;
    answer.push(1);
    if(max<num2){
        answer = [];
        max = num2;
        answer.push(2);
    }
    else if(max==num2){
        answer.push(2);
    }
    if(max<num3){
        answer = [];
        answer.push(3);
    }
    else if(max==num3){
        answer.push(3);
    }
    return answer;
}