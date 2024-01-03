function solution(elements) {
    var answer = [];
    let cnt = 1;
    let sum;
    let set;

    for(let cnt = 1; cnt <=elements.length; cnt++){
        for(let i=0;i<elements.length;i++){
            sum = 0;
            for(let j=0;j<cnt;j++){
                sum += elements[(i+j)%elements.length];
            }
            answer.push(sum);
        }
    }
    set = new Set(answer);
    return set.size;
}