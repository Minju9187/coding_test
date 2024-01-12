function solution(s) {
    var answer = [];
    s = s.replace("{{","").replace("}}","").split("},{");
    for(let i=0;i<s.length;i++){
        s[i] = s[i].split(",").map(v=>Number(v));
    }
    
    s.sort((a,b)=>a.length-b.length);
    
    s.forEach(v=>{
        v.forEach(value=>{
            if(!answer.includes(value))answer.push(value);
        })
    })
    return answer;
}