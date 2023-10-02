function solution(order) {
    const arr = order.toString().split('')
    let clap = 0;
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i]%3 ===0 && arr[i]!=0){
            clap++;
        }
    }
    return clap;
}