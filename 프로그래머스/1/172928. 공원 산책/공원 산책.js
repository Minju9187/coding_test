function solution(park, routes) {
    var answer = [];
    let routesObj = {};
    let routesValue = [];
    let dogX,dogY;
    let height = park.length;
    let width = park[0].length;
    let key = false;
    
    for(let i=0;i<park.length;i++){
        for(let j=0;j<park.length;j++){
            if(park[i][j]==="S"){
                dogX = j;
                dogY = i;
            }
        }
    }

    for(let s=0;s<routes.length;s++){
        let [dir,dis] = routes[s].split(" ");
        dis = Number(dis);
        if(dir==='E'){
            if(dogX + dis < width){
                key = true;
                for(let j=1;j<=dis;j++){
                    if(park[dogY][dogX+j]==="X"){
                        key = false;
                        break;
                    }
                }
                if(key===true){
                    dogX = dogX + dis;
                }
            }
        }
        else if(dir==="W"){
            if((dogX - dis) >= 0){
                key = true;
                for(let j=1;j<=dis;j++){
                    if(park[dogY][dogX-j]==="X"){
                        key = false;
                        break;
                    }
                }
                if(key===true){
                    dogX = dogX - dis;
                }
            }
        }
        else if(dir==="S"){
            if((dogY + dis) < height){
                key = true;
                for(let i=1;i<=dis;i++){
                    if(park[dogY+i][dogX]==="X"){
                        key = false;
                        break;
                    }
                }
                if(key===true){
                    dogY = dogY + dis;
                }
            }
        }
        else if(dir==="N"){
            if((dogY - dis) >= 0){
                key = true;
                for(let i=1;i<=dis;i++){
                    if(park[dogY-i][dogX]==="X"){
                        key = false;
                        break;
                    }
                }
                if(key===true){
                    dogY = dogY - dis;
                }
            }
        }
    }
    // console.log(dogY,dogX);
    answer = [dogY,dogX];
    return answer;
}