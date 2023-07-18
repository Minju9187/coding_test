function solution(t, p) {
    var answer = 0;
    let n = p.length;
    let str = "";
    for(let i=0;i<t.length - n+1;i++){
        // t.slice(idx,idx+pLength)
        str = t.slice(i,i+n);
        if(p>=parseInt(str)){
            answer+=1;
        }
    }
    return answer;
}