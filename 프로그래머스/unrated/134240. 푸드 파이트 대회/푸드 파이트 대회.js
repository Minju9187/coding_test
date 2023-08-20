function solution(food) {
    var answer = '';
    let arr = [];
    let num = 1;
    let key;
    for(let i=1;i<food.length;i++){
        key = food[i];
        if(key%2==0){
            for(let i=0;i<(key/2);i++){
                arr.push(num);
            }
            num++;
        }
        else{
            for(let i=0;i<((key-1)/2);i++){
                arr.push(num);
            }
            num++;
        }
    }
    answer += arr.join('');
    answer +='0';
    answer +=arr.reverse().join('');
    return answer;
}