function solution(bandage, health, attacks) {
    var answer = 0;
    let max_health = health;
    let start = 1;
    
    let [시전시간, 초당회복량, 추가회복량] = bandage;
    
    for(let i=0;i<attacks.length;i++){
        let [공격시간,피해량] = attacks[i];
        let 힐링시간 = 공격시간-start;
        if(health<=max_health){
            health += 힐링시간 * 초당회복량 + Math.floor(힐링시간/시전시간)*추가회복량;
            if(health>max_health)health = max_health;
        }
        health -= 피해량;
        if(health<=0)return -1;
        start = 공격시간 + 1;
    }
    answer = health;
    
    return answer;
}