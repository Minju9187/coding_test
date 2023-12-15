function solution(players, callings) {
    var answer = [];
    let rankObj = {};
    let playersObj = {};
    let rank;
    let winner;
    let loser;
    
    for(let i=0;i<players.length;i++){
        rankObj[i+1] = players[i];
        playersObj[players[i]] = i+1;
        
    }
    for(let i=0;i<callings.length;i++){
        rank = playersObj[callings[i]];
        winner = rankObj[rank];
        loser = rankObj[rank-1];
        
        rankObj[rank-1] = winner;
        rankObj[rank] = loser;
        
        playersObj[winner]--;
        playersObj[loser]++;
    }
    answer = Object.values(rankObj)
    return answer;
}

// function solution(players, callings) {
//     var answer = [];
//     let temp;
//     for(let i=0;i<callings.length;i++){
//         let idx = players.indexOf(callings[i])
//         temp = players[idx];
//         players[idx] = players[idx-1];
//         players[idx-1] = temp;
//     }
//     answer = [...players];
//     return answer;
// }