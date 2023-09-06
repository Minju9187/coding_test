function solution(nums) {
    var answer = 0;
    let arr = [];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                arr.push(nums[i] + nums[j] + nums[k])
            }
        }
    }
    for(let i=0;i<arr.length;i++){
        if(isPrime(arr[i]))answer += 1;
    }
    return answer;
}
function isPrime(num) {
    if(num === 1) return false; 
    for(let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if(num % i === 0) return false;
    } 
    return true;
}