function solution(my_string) {
    var answer = '';
    let idx = 0;
    // const answer = my_string => my_string.filter((v,i,self) => self.indexOf(v) === i);
    for(let i=0;i<my_string.length;i++){
        idx = 0;
        for(let j=i;j>=0;j--){
            if(my_string[i]==my_string[j])idx++;
        }
        if(idx==1)answer += my_string[i];
    }
    return answer;
}