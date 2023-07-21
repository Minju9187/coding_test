function solution(n, arr1, arr2) {
    let arr1_55=[],arr2_55=[];
    let arr="";
    var answer = [];
    for(let i=0;i<arr1.length;i++){
        arr1_55[i] = makebinary(arr1[i],n);
    }
    for(let i=0;i<arr2.length;i++){
        arr2_55[i] = makebinary(arr2[i],n);
    }
    // console.log(...arr1_55)
    // console.log(...arr2_55)
    for(let i=0;i<arr1_55.length;i++){
        arr=""
        for(let j=0;j<arr1_55.length;j++){
            // console.log(arr1_55[i][j] == '1'||arr2_55[i][j] == '1')
            if(arr1_55[i][j] == 1||arr2_55[i][j] == 1){
                arr+="#";
            }
            else{
                arr+=" ";
            }
        }
        answer.push(arr);
    }
    return answer;
}
//Math.pow(2, 3)
function makebinary(a,n){
    let arr = [];
        for(let i=n-1;i>=0;i--){
            arr.push(Math.floor(a/Math.pow(2,i)))
            a%=Math.pow(2,i)
        }
    // console.log(...arr);
    return arr;
}