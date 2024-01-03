function solution(s) {
    var answer = 0;
    let key = false;
    let stack = [];
    for(let i=0;i<s.length;i++){
        stack = [];
        for(let j=i;j<s.length+i;j++){
            stack.push(s[j%s.length]);
            check(stack);
        }
        if(stack.length === 0)answer++;
    }
    return answer;
}

function check(stack){
    if(stack[stack.length-2]==="["&&stack[stack.length-1]==="]"||stack[stack.length-2]==="{"&&stack[stack.length-1]==="}"||stack[stack.length-2]==="("&&stack[stack.length-1]===")"){
        stack.pop();
        stack.pop();
    }
    return;
}