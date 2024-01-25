function solution(msg) {
    var answer = [];
    let obj = {};
    let content="";
    let idx;
    let before_num;
    let num;
    for(num=1;num<=26;num++){
        obj[String.fromCharCode(num+64)] = num;
    }
    for(let i=0;i<msg.length;i++){
        content=""
        idx = i;
        while(true){
            content += msg[idx];
            
            if(!obj[content]){
                answer.push(before_num);
                obj[content] = num;
                num++;
                i = idx - 1;
                break;
            }else{
                before_num = obj[content];
                idx++;
            }
        }
    }
    return answer;
}