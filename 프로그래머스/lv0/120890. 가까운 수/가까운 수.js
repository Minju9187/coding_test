function solution(array, n) {
    var answer = 0;
    let a = []; 
    let arrSort = array.sort((a, b) => (a-b));
    if (array.length == 1) {
        return array[0]
    }
    for (let i=0; i<array.length; i++) {
        a.push(arrSort[i] - n >= 0 ?  arrSort[i]-n : -(arrSort[i]-n));
    }
    for (let j=0; j<a.length-1; j++) {
        if (a[j] === 0 || a[j+1] === 0) {
            return n;
        } else if (a[j] <=a[j+1] && arrSort[j] <= n) {
            answer = arrSort[j];
            break;
        } else if (a[j] <=a[j+1] && arrSort[j] > n) {
            answer = arrSort[j];
            break;
        } else {
            answer = arrSort[j+1];
        }
    } 
     return answer
}
function solution(array, n) {
    var answer = 0;
    let num = 100;
    let arrSort = array.sort((a,b) => a-b); //오름차순
        
    for(i=0; i<arrSort.length; i++){
        let num2 = arrSort[i] - n >= 0 ? arrSort[i]-n : n-arrSort[i]
        if(num>num2){
            num = num2;
            answer = arrSort[i];
        }  
    }        
    return answer;
}