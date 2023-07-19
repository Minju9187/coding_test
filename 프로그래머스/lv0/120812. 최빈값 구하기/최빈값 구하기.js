function solution(arr) {
    var answer = 0;
    let value_arr = [];
    let num_arr = [];
    
    let max;
    let num;
    let check = 0;
    let key;
    //겹치는 value 제외하고 push
    arr.sort((a,b) => a-b);
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]!=arr[i+1]) value_arr.push(arr[i]);
    }
    value_arr.push(arr[arr.length-1]);

    //value 값마다 몇개씩 원소를 갖고있는지 찾아서 num_arr에 차례대로 넣음
    for(let i=0;i<value_arr.length;i++){
        num = 0;
        for(let j=0;j<arr.length;j++){
            if(value_arr[i]==arr[j]){
                num += 1;
            }
        }
        num_arr.push(num);
    }
    
    //num_arr중 최댓값을 찾음
    max = Math.max(...num_arr);

    //최댓값과 같은 값이 한개인지 두개 이상인지 확인
    //확인 했을 때의 index를 반환
    for(let i=0 ; i<num_arr.length ; i++){
        if(max == num_arr[i]){
            check += 1;
            key = i;
        }
        if(check > 1)break;
    }
    //최빈값이 2개 이상이면 -1
    if(check > 1){
        answer = -1;
    }
    //최빈값이 1개면 key를 넣어 value를 출력
    else{
        answer = value_arr[key];
    }

    return answer;
}
