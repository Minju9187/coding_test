function solution(str1, str2) {
    var answer = 0;
    let str1_arr = [];
    let str2_arr = [];
    let union = [];
    let inter = [];
    const regex = /[\W0-9_]/
    
    str1 = str1.toUpperCase().split("");
    str2 = str2.toUpperCase().split("");
    
    for(let i=0;i<str1.length-1;i++){
        let temp = str1[i]+str1[i+1]
        if(regex.test(temp)) continue;
        str1_arr.push(temp);
    }
    
    for(let i=0;i<str2.length-1;i++){
        let temp = str2[i]+str2[i+1]
        if(regex.test(temp)) continue;
        str2_arr.push(temp);
    }
    
    if(str1_arr.length === 0 && str2_arr.length === 0) return 65536;
    
    for(let i=0;i<str1_arr.length;i++){
        if(str2_arr.includes(str1_arr[i])){
            let idx = str2_arr.indexOf(str1_arr[i]);
            str2_arr.splice(idx,1);
            inter.push(str1_arr[i]);
        }else{
            union.push(str1_arr[i]);
        }
    }
    
    str2_arr.forEach(v=>union.push(v));
    
    answer = 65536 * inter.length / (union.length + inter.length);
    
    return Math.floor(answer);
}