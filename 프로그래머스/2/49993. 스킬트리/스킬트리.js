function solution(skill, skill_trees) {
    var answer = 0;
    let key; // skill이 순서대로 찍히는지 확인
    let check; // 이상 없이 돌았는지 확인
    skill = skill.split("");

    for(let i=0;i<skill_trees.length;i++){
        
        let arr = skill_trees[i].split("");
        //초기화
        check = true;
        key = -1;
        
        for(let j=0;j<arr.length;j++){
            if(skill.includes(arr[j])){ // skill에 포함되어 있을때
                if(skill.findIndex(v => v===arr[j]) === key + 1){ // skill이 순서대로 찍힌건지 확인
                    key++;
                    continue;
                }else{ // skill이 순서대로 찍히지 않았을 때
                    check = false;
                    break;
                }
            }else{ // skill이 포함되어 있지 않을때 ( 막 찍어도됨 )
                continue;
            }
        }
        if(check===true){ // skill이 잘 찍혔을 때
            answer++;
        }
    }
    return answer;
}