function solution(new_id) {
    var answer = '';
    new_id = level1(new_id); // 1단계
    new_id = level2(new_id); // 2단계
    new_id = level3(new_id); // 3단계
    new_id = level4(new_id); // 4단계
    new_id = level5(new_id); // 5단계
    new_id = level6(new_id); // 6단계
    new_id = level4(new_id); // 마지막 마침표 제거
    new_id = level7(new_id); // 7단계
    answer = new_id;
    return answer;
}
function level1(new_id){ // 1단계
    return new_id.toLowerCase();
}

function level2(new_id){ // 2단계
    let arr_new_id = new_id.split("");
    for(let i=0;i<arr_new_id.length;i++){
        if(arr_new_id[i]>="a" && arr_new_id[i]<="z" || arr_new_id[i]>=0 && arr_new_id[i]<=9 || arr_new_id[i]==="." || arr_new_id[i]==="-" || arr_new_id[i]==="_"){
            continue;
        }
        else arr_new_id[i]="";
    }
    return arr_new_id.join("");
}

function level3(new_id){ // 3단계
    let arr_new_id = new_id.split("");
    for(let i=0;i<arr_new_id.length;i++){
        if(arr_new_id[i]==="."){
            for(let j=i+1;j<arr_new_id.length;j++){
                if(arr_new_id[j]==="."){
                    arr_new_id[j]="";
                }
                else break;
            }
        }
    }
    return arr_new_id.join("");
}

function level4(new_id){ // 4단계
    let arr_new_id = new_id.split("");
    if(arr_new_id[0]===".")arr_new_id[0]="";
    if(arr_new_id[arr_new_id.length-1]===".")arr_new_id[arr_new_id.length-1]="";
    return arr_new_id.join("");
}

function level5(new_id){ // 5단계
    if(new_id==="")new_id = "a";
    return new_id;
}

function level6(new_id){ // 6단계
    let arr_new_id = new_id.split("");
    if(arr_new_id.length>15){
        for(let i=15;i<arr_new_id.length;i++){
            arr_new_id[i]="";
        }
    }
    return arr_new_id.join("");
}

function level7(new_id){ // 7단계
    let arr_new_id = new_id.split("");
    if(arr_new_id.length<=2){
        for(let i=arr_new_id.length-1;i<3;i++){
            arr_new_id[i]=arr_new_id[arr_new_id.length-1];
        }
    }
    return arr_new_id.join("");
}