function solution(rank, attendance) {
    var answer = 0;
    let min;
    let a,b,c;
    for(let i=0;i<rank.length;i++){
        if(attendance[i]==false){
            rank[i]=rank.length+1;
        }
    }

    min=rank.length + 1;
    for(let i=0;i<rank.length;i++){
        if(min>rank[i]){
            min=rank[i];
            a=i;
        }
    }
    rank[a] = rank.length + 1;
    min = rank.length + 1;
    
    for(let i=0;i<rank.length;i++){
        if(min>rank[i]){
            min=rank[i];
            b=i;
        }
    }
    rank[b] = rank.length + 1;
    min = rank.length + 1;

    for(let i=0;i<rank.length;i++){
        if(min>rank[i]){
            min=rank[i];
            c=i;
        }
    }
    console.log(`${a} ${b} ${c}`);
    answer = a*10000 + b*100 + c;
    return answer;
}