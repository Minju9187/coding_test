// substring이나 slice 둘다 써도 됨
// parseInt랑 Number 둘다 써도 가능
function solution(t, p) {
    var answer = 0;
    let n = p.length;
    let str = "";
    for(let i=0;i<t.length - n+1;i++){
        str = t.substring(i,i+n);
        if(p>=parseInt(str)){
            answer+=1;
        }
    }
    return answer;
    //
}