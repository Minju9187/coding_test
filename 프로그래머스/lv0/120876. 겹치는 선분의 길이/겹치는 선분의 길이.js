function solution(lines) {
    var answer = 0;
    let arr = [];
    let a_b,b_c,c_a,a_b_c;
    console.log(lines)
    arr.push(intersection(lines[0],lines[1]));
    arr.push(intersection(lines[1],lines[2]));
    arr.push(intersection(lines[2],lines[0]));
    arr.push(intersection(arr[0],arr[1]));
    a_b = sub(arr[0])
    b_c = sub(arr[1])
    c_a = sub(arr[2])
    a_b_c = sub(arr[3])
    answer = a_b + b_c + c_a - 2*a_b_c
    return answer;
}

function intersection(a,b){
    if(a[1]<=b[0] || b[1]<=a[0])return [0,0];
    else{
        return [ a[0]>b[0] ? a[0]:b[0] , a[1]>b[1] ? b[1]:a[1] ]
    }
    
}
function sub(a){
    return a[1]-a[0]
}