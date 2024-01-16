const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] ;
      const permutations = getPermutations(rest, selectNumber - 1); 
      const attached = permutations.map((el) => [fixed, ...el]); 
      results.push(...attached); 
    });

    return results;
}

function solution(k, dungeons) {
    const dungeonsLength = dungeons.length;
    const permutations = getPermutations(Array(dungeonsLength).fill(0).map((_,idx)=>idx),dungeonsLength);
    //[[ 0, 1, 2 ],[ 0, 2, 1 ],[ 1, 0, 2 ],[ 1, 2, 0 ],[ 2, 0, 1 ],[ 2, 1, 0 ]]
    let answer = 0;
    permutations.forEach(permutation=>{
        let piro = k;
        let dungeonsCount = 0;
        for(let i=0;i<permutation.length;i++){
            const dungeonsIdx = permutation[i];
            if(piro >= dungeons[dungeonsIdx][0]){
                piro -= dungeons[dungeonsIdx][1];
            }
            else{
                break;
            }
            dungeonsCount++;
        }
        answer = Math.max(answer,dungeonsCount);
    })

    return answer;
} 

// function dfs(k,dungeons,visit,index,answer,resultArr){

//     for(let a=0;a<dungeons.length;a++){
//         if((!visit[a])&&(k>=dungeons[a][0])){   
//             visit[a]=true;
//             k-=dungeons[a][1];

//             resultArr.push(answer+1);
//             dfs(k,dungeons,visit,a+1,answer+1,resultArr);

//             visit[a]=false;
//             k+=dungeons[a][1];

//         }
//     }


// }
// function solution(k, dungeons) {
//     var answer = 0;
//     let index=0;
//     const resultArr=[];
//     const visit=Array(dungeons.length).fill(false);

//     dfs(k,dungeons,visit,index,answer,resultArr);
//     answer= Math.max(...resultArr);

//     return answer;
// }