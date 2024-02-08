// function solution(numbers) {
//     var answer = [];
//     for(let i=0;i<numbers.length;i++){
//         if(i===numbers.length-1){
//             answer.push(-1);
//             break;
//         }
//         for(let j=i+1;j<numbers.length;j++){
//             if(numbers[i]<numbers[j]){
//                 answer.push(numbers[j]);
//                 break;
//             }
//             if(j===numbers.length-1)answer.push(-1);
//         }
//     }
//     return answer;
// }

function solution(numbers) {

    const length = numbers.length;
    const answer = Array.from({length}, () => -1);
    const stack = [];

    for (let i = length - 1; i >= 0; i--) {
        //스택 크기가 0이 아니고 스택 마지막 요소가 numbers[i]보다 작을때 pop
        while (stack.length !== 0 && numbers[i] >= stack.at(-1)) stack.pop();
        //스택 크기가 0이 아니면 answer[i]에 stack 마지막 요소 대입
        if (stack.length !== 0) answer[i] = stack.at(-1);
        stack.push(numbers[i]);
    }
    return answer;
}