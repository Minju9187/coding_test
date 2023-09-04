function solution(nums) {
    var answer = 0;
    const arr = new Set(nums);
    let n_2 = parseInt(nums.length/2);
    if(n_2 < arr.size)answer = n_2;
    else answer = arr.size;
    return answer;
}