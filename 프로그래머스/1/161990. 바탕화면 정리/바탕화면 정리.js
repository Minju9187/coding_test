function solution(wallpaper) {
    var answer = [];
    let lux=50,luy=50,rdx=0,rdy=0;
    for(let i=0;i<wallpaper.length;i++){
        for(let j=0;j<wallpaper[i].length;j++){
            if(wallpaper[i][j]==="#"){
                lux = Math.min(i,lux);
                luy = Math.min(j,luy);
                rdx = Math.max(i,rdx);
                rdy = Math.max(j,rdy);
            }
        }
    }
    answer = [lux,luy,rdx+1,rdy+1];
    return answer;
}