function solution(n, words) {
    var answer = [];
    let dic = {};
    
    for(let i=0;i<words.length;i++){
        if(dic[words[i]]===true){
            let a = (i+1)%n;
            if(a===0)a = n;
            let b = Math.ceil((i+1)/n);
            return [a,b];
        }
        dic[words[i]] = true;
        if(i>=1 && words[i-1][words[i-1].length-1]!==words[i][0]){
            let a = (i+1)%n;
            if(a===0)a = n;
            let b = Math.ceil((i+1)/n);
            return [a,b];
        }
    }
    answer = [0,0];
    return answer;
}