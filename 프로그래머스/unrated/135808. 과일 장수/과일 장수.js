function solution(k, m, score) {
    let answer = 0;
    if(score.length<m)
        return 0;
    score.sort((a,b)=>a-b);
    while(score.length>=m){
        let box = score.splice(score.length - m, m);
        answer += box[0] * m
    }
    return answer;
}
// function solution(k, m, score) {
//     var answer = 0;
//     score.sort((a,b)=>b-a,0);
    
//     while(true){
//         if(score.length>=m){
//             let arr = score.splice(0,m);
//             answer += arr[m-1]*m;
//         }
//         else break;
//     }
//     return answer;
// }