function solution(n){
    let answer = 0;
    let arr = [1,2];
    for(let i=2;i<n;i++){
        arr.push((arr[i-2]+arr[i-1])%1000000007);
    }
    return arr[n-1];
}

// function solution(n) {
//     let answer = 0;
//     function DFS(current){
//         if(current===n){
//             answer++;
//         }
//         if(current>n){
//             return
//         }
//         DFS(current+1);
//         DFS(current+2);
//     }
//     DFS(0);
//     return answer;
// }
