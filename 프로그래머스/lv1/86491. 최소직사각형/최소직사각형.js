//swap 하는 방법 https://miiingo.tistory.com/364
function solution(sizes) {
    var answer = 0;
    let w_max = 0;
    let h_max = 0;
    let w_idx,h_idx;
    for( let i=0;i<sizes.length;i++){
        if(sizes[i][0]<sizes[i][1]){
            [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]];
        }
    }
    for(let i=0;i<sizes.length;i++){
        if(w_max < sizes[i][0]){
            w_max = sizes[i][0];
        }
        if(h_max < sizes[i][1]){
            h_max = sizes[i][1];
        }
    }
    answer = w_max * h_max;
    return answer;
}
