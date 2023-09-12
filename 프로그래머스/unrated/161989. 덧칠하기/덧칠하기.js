function solution(n, m, section) {
    let answer = 0;
    //벽의 길이 n
    //롤러의 길이 m
    //section 칠해야하는 벽 구간
    const wall = Array(n).fill(1);
    section.forEach(v=>{
        wall[v-1] = 0;
    })
    console.log(wall)
    wall.forEach((v)=>{
        if(v === 0){
            wall.splice(0, m, 1);
            answer++;
        }
    })
    
    return answer;
}
// function solution(n, m, section) {
//     var answer = 0;
//     for(let i=0;i<section.length;i++){
//         for(let j=i+1;j<section.length;j++){
//             if(section[j]-section[i]>=m){
//                 answer++;
//                 i=j;
//             }
//         }
//     }
//     answer++;
//     return answer;
// }