function solution(numbers) {
    var answer = [];
    let sum;
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            sum = numbers[i] + numbers[j]
            if(answer.indexOf(sum)<0){
                answer.push(sum)
            }
        }
    }
    answer.sort((a,b)=>a-b)
    return answer;
}