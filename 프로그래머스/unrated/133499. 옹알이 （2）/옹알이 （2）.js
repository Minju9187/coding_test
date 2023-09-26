function solution(babbling) {
    var answer = 0;
    let arr;
    let key;
    arr = babbling.map( v => v.replace(/aya/g,'A')
                       .replace(/ye/g,'B')
                       .replace(/woo/g,'C')
                       .replace(/ma/g,'D'))
                        .filter(word=>!word.match(/[a-z]/g))
    
    for(let i=0;i<arr.length; i++){
        key = 0;
        for(let j=0;j<arr[i].length-1;j++){
            if(arr[i][j]===arr[i][j+1]){
                key = 1;
                break;
            }
        }
        if(key===0)answer++;
    }
    return answer;
}