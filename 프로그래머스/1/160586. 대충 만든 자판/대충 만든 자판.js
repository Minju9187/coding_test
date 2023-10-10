function solution(keymap, targets) {
    var answer = [];
    let sum = 0;
    let objectKey = {};
    for(let i=0;i<keymap.length;i++){
        for(let j=0;j<keymap[i].length;j++){
            if(objectKey[keymap[i][j]]===undefined){
                objectKey[keymap[i][j]]=j+1;
            }
            else{
                if(objectKey[keymap[i][j]]>j+1){
                    objectKey[keymap[i][j]]=j+1
                }
            }
        }
    }
    targets.forEach(v=>{
        sum = 0;
        v.split("").forEach(v=>{
            sum+=parseInt(objectKey[v]);
        })
        if(isNaN(sum))answer.push(-1);
        else answer.push(sum);
    })
    return answer;
}