function solution(s){
    let cnt = 0;

    for(let i = 0; i<s.length; i++){
        s[i] === "(" ? cnt +=1 : cnt+= -1
        if(cnt<0){
            break;
        }
    }

    return cnt === 0 ? true : false;
}
// function solution(s){
//     var answer = true;
//     let stack = [];
//     for(let i=0;i<s.length;i++){
//         if(s[i]==='('){
//             stack.push('(');
//         }
//         else{
//             if(stack[stack.length-1]==='(')stack.pop();
//             else return false;
//         }
//     }
//     //if(stack.length>0)return false;
//     //else return true;
//     return !stack.length ? true : false;
// }