function zerofive(n){
    let a;
    let key = "true";
    while(true){
        a = n % 10;
        if(a!=5&&a!=0){
            key = "false"
            break;
        }
        n = Math.floor(n/10);
        if(n==0)break;
    }
    return key;
}

function solution(l, r) {
    var answer = [];
    for(let i = l ; i <= r ; i ++){
        if(zerofive(i)=="true"){
            answer.push(i);
        }
    }
    if(answer.length==0){
        answer.push(-1);
    }
    return answer;
}

//for문을 돌림
//함수를 만들어 5와 0으로만 이루어져있는 숫자들을 찾음