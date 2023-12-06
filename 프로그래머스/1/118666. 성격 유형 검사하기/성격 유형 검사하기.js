function solution(survey, choices) {
    const types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    let answer = "";
    for(let i=0;i<survey.length;i++){
        let [left,right] = survey[i].split("");
        let result = Math.abs(choices[i]-4);
        if(choices[i]>=4){
            types[right] += result;
        }
        else if(choices[i]<4){
            types[left] += result;
        }
    }
    let type = Object.keys(types);
    for(let i=0;i<type.length;i+=2){
        if(types[type[i]]>=types[type[i+1]]){
            answer+=type[i];
        }
        else answer+=type[i+1];
    }
    return answer;
}