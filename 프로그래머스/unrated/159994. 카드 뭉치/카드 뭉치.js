function solution(cards1, cards2, goal) {
    for(let i=0;i<goal.length;i++){
        if(goal[i]==cards1[0]){
            cards1.shift();
        }
        else if(goal[i]==cards2[0]){
            cards2.shift();
        }
        else return 'No';
    }
    return 'Yes';
    // while(goal.length > 0){
    //     if(goal[0] === cards1[0]){
    //         goal.shift()
    //         cards1.shift()
    //     }else if(goal[0] === cards2[0]){
    //         goal.shift()
    //         cards2.shift()
    //     }else return "No"
    // }
    // return "Yes";
}