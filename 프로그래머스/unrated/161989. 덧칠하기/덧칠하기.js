function solution(n, m, section) {
    var answer = 0;
    for(let i=0;i<section.length;i++){
        for(let j=i+1;j<section.length;j++){
            if(section[j]-section[i]>=m){
                answer++;
                i=j;
            }
        }
    }
    answer++;
    return answer;
}