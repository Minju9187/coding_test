function solution(s) {
    var answer = '';
    let arr;
    //reset을 1로 넣어준 이유는 첫 포문 들어갈때는 1을 더하지 않기 때문
    // ( 단어 첫글자 reset -> 1 단어 두번째글자 reset -> 2)
    let reset = 1;
    arr = s.split("");
    for(let i = 0;i < arr.length ; i ++, reset++){
        if(arr[i]==" "){
            reset = 0;
            continue;
        }
        if(reset%2==1){
            arr[i] = arr[i].toUpperCase();
        }
        if(reset%2==0){
            arr[i] = arr[i].toLowerCase();
        }
    }
    answer = arr.join("");
    return answer;
}