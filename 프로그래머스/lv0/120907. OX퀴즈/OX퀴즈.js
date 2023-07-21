function solution(quiz) {
    var answer = [];
    let arr = [];
    for(let i in quiz){
        arr = quiz[i].split("=");
        if(eval(arr[0])==Number(arr[1]))answer.push("O");
        else answer.push("X");
    }
    return answer;
}