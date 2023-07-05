function solution(s) {
    var answer = '';
    let min,max;
    let arr,numArr;
    arr = s.split(" ");
    numArr = arr.map(Number);
    
    max = numArr[0];
    min = numArr[0];
    
    for(let i = 1; i < arr.length ; i++){
        if(max < numArr[i])max = numArr[i];
        if(min > numArr[i])min = numArr[i];
    }
    
    answer = `${min.toString()} ${max.toString()}`
    
    return answer;
}
// 쉬운 방법 Math.min & Math.max를 사용
// function solution(s) {
//     const arr = s.split(' ');

//     return Math.min(...arr)+' '+Math.max(...arr);
// }

// Javascript에서 배열의 문자를 숫자로 변환하는 법 https://programming4myself.tistory.com/41