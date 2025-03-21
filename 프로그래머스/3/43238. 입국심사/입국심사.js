function solution(n, times) {
    var answer = 0;
    let left = 1;
    let right = Math.max(...times) * n;
    
    while(left <= right){
        const mid = Math.floor((left + right)/2);
        let people = 0;
        for(let i = 0 ; i < times.length; i++){
            people += Math.floor(mid / times[i]);
        }
        if(people < n){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return left;
}