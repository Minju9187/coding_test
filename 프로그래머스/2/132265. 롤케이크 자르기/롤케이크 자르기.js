function solution(topping) {
    var answer = 0;
    let 민주 = {};
    let 민서 = {};
    let 민주cnt = 0;
    let 민서cnt = 0;
    //민서한테 다 주고 시작
    topping.forEach(v=>{
        if(민서[v]===undefined){
            민서[v] = 1;
            민서cnt++;
    }else{
        민서[v]++;
    }})
    //topping 앞에서부터 한개씩 민서한테 뺏어옴
    topping.forEach(v=>{
        //1개 남았으면 한개 뺏을때 0개가 되므로 cnt줄이기
        if(민서[v]===1){
            민서[v]--;
            민서cnt--;
        }else{
            민서[v]--;
        }
        //뺏어온 걸 민주 갯수 늘려주기
        if(민주[v]===undefined){
            민주[v] = 1;
            민주cnt++;
        }else{
            민주[v]++;
        }
        //cnt 같으면 공평하므로 answer증가
        if(민주cnt === 민서cnt)answer++;
    })
    return answer;
}