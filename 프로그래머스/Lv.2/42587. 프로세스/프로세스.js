function solution(priorities, location) {
    var answer = 0;
    let source;
    while(priorities.length>0){
        if(priorities[0]!==Math.max(...priorities)){
            source = priorities.shift();
            priorities.push(source);
        }else{
            source = priorities.shift();
            answer++;
            if(location===0)return answer;
        }
        location--;
        if(location===-1)location = priorities.length - 1;
    }
    return answer;
}