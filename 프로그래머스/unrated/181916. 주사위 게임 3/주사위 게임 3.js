//set 함수를 쓸때에는 set으로 중복 제거를 해준 후 다시 Array.from을 이용해 배열안에 넣어 주어야 한다.
function solution(a, b, c, d) {
    var answer = 0;
    let arr = [a,b,c,d]
    let arr1 = [];
    let setArr  = Array.from(new Set(arr))
    let num = 0;

    if(setArr.length==1){
        answer = setArr[0]*1111
    }
    else if(setArr.length==2){
        for(let i=0;i<4;i++){
            if(setArr[0]==arr[i]){
                num += 1
            }
        }
        if(num == 1){
            answer = (10*setArr[1]+setArr[0])**2
        }
        if(num == 3){
            answer = (10*setArr[0]+setArr[1])**2
        }
        if(num == 2){
            answer = (setArr[0]+setArr[1])*Math.abs((setArr[0]-setArr[1]))
        }
    }
    else if(setArr.length==3){
        for(let i=0;i<3;i++){
            num = 0;
            for(let j=0;j<4;j++){
                if(setArr[i]==arr[j]){
                    num++;
                }
            }
            if(num==1) arr1.push(setArr[i])
        }
        answer = arr1[0]*arr1[1]
    }
    else if(setArr.length==4){
        answer = setArr.sort((a,b)=>a-b)[0]
    }
    return answer;
}