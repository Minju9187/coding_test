function solution(dots) {
    var answer = 0;
    let arr =[];
    let a,b;
    let key = 0;
    //y = a*x + b;
    for(let i=0;i<dots.length-1;i++){
        for(let j=i+1;j<dots.length;j++){
            if(dots[i][0]-dots[j][0]!=0){
                a = (dots[i][1]-dots[j][1])/(dots[i][0]-dots[j][0]);
                b = dots[i][1] - dots[i][0]*a;
                arr.push([a,b]);
            }
            else{
                arr.push(['infinity',dots[i][0]])
            }
        }
    }
    //평행하는 경우
    for(let i=0;i<arr.length-1;i++){
        for(let j=1;j<arr.length;j++){
            if(arr[i][0]==arr[j][0]&&arr[i][1]!=arr[j][1])key++;
        }
    }
    //일치할때
    if(dots[2][1]==arr[0][0]*dots[2][0]+arr[0][1]&&dots[3][1]==arr[0][0]*dots[3][0]+arr[0][1])key++;
    
    if(key > 0)answer = 1;
    else answer = 0;
    return answer;
}