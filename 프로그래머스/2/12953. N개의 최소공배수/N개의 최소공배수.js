function solution(arr) {
    var answer = 1;
    for(let i=0;i<arr.length;i++){
        answer = lcm(answer,arr[i]);
    }
    return answer;
}

function gcd(a,b){
    let r;
    while(b != 0){
        r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function lcm(a,b){
    return(a * b) / gcd(a, b);
}