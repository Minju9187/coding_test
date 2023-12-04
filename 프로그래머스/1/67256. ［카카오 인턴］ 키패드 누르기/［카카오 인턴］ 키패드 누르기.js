function solution(numbers, hand) {
    var answer = '';
    let lefthand = [0,3];
    let righthand = [2,3];
    let leftDiff;
    let rightDiff;
    let center;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]===0){
            numbers[i]=11;
        }
        if(numbers[i]%3===1){
            answer+="L";
            lefthand[0] = 0;
            lefthand[1] = Math.floor(numbers[i]/3);
        }
        else if(numbers[i]%3===0){
            answer+="R";
            righthand[0] = 2;
            righthand[1] = Math.floor(numbers[i]/3)-1;
        }
        else{
            center = Math.floor(numbers[i]/3);
            leftDiff = diff(lefthand,center);
            rightDiff = diff(righthand,center);
            
            if(leftDiff<rightDiff){
                answer+="L";
                lefthand[0] = 1;
                lefthand[1] = Math.floor(numbers[i]/3);
            }
            else if(leftDiff>rightDiff){
                answer+="R";
                righthand[0] = 1;
                righthand[1] = Math.floor(numbers[i]/3);
            }
            else{
                if(hand==="right"){
                    answer+="R"
                    righthand[0] = 1;
                    righthand[1] = Math.floor(numbers[i]/3);
                }
                else{
                    answer+="L";
                    lefthand[0] = 1;
                    lefthand[1] = Math.floor(numbers[i]/3);
                }
            }
        }
    }
    return answer;
}

function diff(arr,temp){
    return Math.abs(arr[0]-1)+Math.abs(arr[1]-temp);
}