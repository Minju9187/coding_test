function solution(my_string) {
    let calculate = my_string.split(" ")
    let answer = 0;
    console.log(calculate)
    for(let i=0; i<=calculate.length-1; i++){
        if(calculate[i] === "+"){
            continue;
        } else if(calculate[i] === "-"){
            calculate[i+1] = "-" + calculate[i+1]
            continue;
        }
        answer += Number(calculate[i])
    }
    return answer;
}