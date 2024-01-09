function solution(clothes) {
    let obj = {};
    let sum = 0;
    let mul = 1;
    for(let i=0;i<clothes.length;i++){
        if(!obj[clothes[i][1]])obj[clothes[i][1]] = 1;
        else obj[clothes[i][1]]++;
    }
    let arr = Object.values(obj);

    for(let i=0;i<arr.length;i++){
        mul *= (arr[i]+1);
    }
    sum += mul -1;
    return sum;
}