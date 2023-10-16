function solution(board, moves) {
    var answer = 0;
    let arrAnswer = [];
    let objectKey = {};
    for(let i=0;i<board.length;i++){
        let arr = [];
        for(let j=board[i].length-1;j>=0;j--){
            if(board[j][i]!=0)arr.push(board[j][i]);
        }
        objectKey[i+1]=arr;
    }
    // console.log(objectKey);
    for(let i=0;i<moves.length;i++){
        if(objectKey[moves[i]].length!=0)arrAnswer.push(objectKey[moves[i]].pop());
        if(arrAnswer.length>=2){
            if(arrAnswer[arrAnswer.length-1]===arrAnswer[arrAnswer.length-2]){
                arrAnswer.pop();
                arrAnswer.pop();
                answer += 2;
            }
        }
    }
    // console.log(arrAnswer);
    return answer;
}