// 2차원 배열 생성 https://gent.tistory.com/296
function solution(n) {
    let a = 0, b = 0;
    let dir = [[0,1], [1,0], [0,-1], [-1,0]];
    let key = 0;
    var answer = Array.from(Array(n), ()=>new Array(n).fill(0));
    for(let i =1;i<=Math.pow(n,2);i++){
        answer[a][b] = i;
        console.log(a,b)
        a+=dir[key][0];
        b+=dir[key][1];
        if(b==n||a==n||b==-1||a==-1){
            a-=dir[key][0];
            b-=dir[key][1];
            key = (key + 1)%4;
            a+=dir[key][0];
            b+=dir[key][1];
        }
        else if(answer[a][b]!=0){
            a-=dir[key][0];
            b-=dir[key][1];
            key = (key + 1)%4;
            a+=dir[key][0];
            b+=dir[key][1];
        }
    }
    return answer;
}