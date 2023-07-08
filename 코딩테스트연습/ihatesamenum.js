//https://school.programmers.co.kr/learn/courses/30/lessons/12906
function solution(arr)
{
    var answer = [];
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] != arr[i+1]){
            answer.push(arr[i]);
        }
    }
    answer.push(arr[arr.length - 1]);
    return answer;
}

//처음에는 뒤에꺼랑 비교해서 같으면 앞에것을 push하는 것으로 생각해봤는데 그렇게 되면 3개 이상 연속으로 나오게 됐을 때 안됨
//그래서 비교해서 달라질 때 앞에것을 push하도록 함.
