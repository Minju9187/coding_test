function solution(x,y,n){
    var answer = -1;
    const stack = [{num:y,tried:0}]
    while(stack.length !== 0){
        const {num,tried} = stack.shift();
        
        if(num===x){
            answer = tried;
            break;
        }
        
        if(num%2 === 0 ){
            stack.push({num:num/2,tried:tried+1})
        }
        if(num%3 === 0 ){
            stack.push({num:num/3,tried:tried+1})
        }
        if(num - n >= x ){
            stack.push({num:num-n,tried:tried+1})
        }
    }
    return answer;
}

// function solution(x, y, n) {
//     var answer = [];
    
//     find(x,y,n,0,answer);

//     return answer.length !== 0 ? Math.min(...answer) : -1;
// }

// function find(x,y,n,tried,result){
//     if(x>=y){
//         if(x===y){
//             result.push(tried);
//         }
//         else{
//             return;
//         }
//     }
//     find(x*2,y,n,tried+1,result);
//     find(x*3,y,n,tried+1,result);
//     find(x+n,y,n,tried+1,result);
// }