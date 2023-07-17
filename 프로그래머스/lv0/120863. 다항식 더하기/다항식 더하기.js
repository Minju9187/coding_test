function solution(polynomial) {
    var answer = '';
    let arr = [];
    let str = "";
    let a = 0;
    let b = 0;
    arr = polynomial.split(" ");

    for(let i=0;i<arr.length;i++){
        if(arr[i].includes("x")==true){
            str = arr[i].replace("x","");
            if(str==""){
                a += 1;
            }
            else{
                a += parseInt(str);
            }

        }
        else if(arr[i].includes("x")==false && arr[i] != "+"){
            b += parseInt(arr[i]);
        }
    }
    
    if(a==0){
        answer += b;
    }
    else if(a==1 && b==0){
        answer = "x";
    }
    else if(a==1 && b!=0){
        answer = "x + " + b;
    }
    else if(a!=0 && a!=1 && b==0){
        answer = a + "x";
    }
    else if(a!=0 && a!=1 && b!=0){
        answer = a + "x + " + b;
    }
    return answer;
}

// include함수 특정한 문자를 포함하고 있으면 true를 반환
// replace함수 특정한 문자를 다른 문자로 변환