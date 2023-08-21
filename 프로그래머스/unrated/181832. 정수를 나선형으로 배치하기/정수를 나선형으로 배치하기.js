// 2차원 배열 생성 https://gent.tistory.com/296
function solution(n) {
    let a = 0, b = 0;
    let dir = [[0,1], [1,0], [0,-1], [-1,0]];
    let key = 0;
    var answer = Array.from(Array(n), ()=>new Array(n).fill(0));
    for(let i =1;i<=Math.pow(n,2);i++){
        answer[a][b] = i;
        a+=dir[key][0];
        b+=dir[key][1];
        // 배열 바깥으로 나갔을 때 전 행열로 돌려놓고 key값을 바꾼다. 
        if(b==n||a==n||b==-1||a==-1){
            a-=dir[key][0];
            b-=dir[key][1];
            key = (key + 1) % 4;
            a+=dir[key][0];
            b+=dir[key][1];
        }
        // 배열 값이 차있는 경우 전 행열로 돌려놓고 key값을 바꾼다.
        else if(answer[a][b]!=0){
            a-=dir[key][0];
            b-=dir[key][1];
            key = (key + 1) % 4;
            a+=dir[key][0];
            b+=dir[key][1];
        }
    }
    return answer;
}