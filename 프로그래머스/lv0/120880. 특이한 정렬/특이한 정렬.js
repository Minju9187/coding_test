function solution(numlist, n) {
    var answer = [];
    let key1,key2;
    let temp;
    for(let i=0;i<numlist.length-1;i++){
        for(let j=1;j<numlist.length-i;j++){
            key1 = Math.abs(numlist[j-1]-n);
            key2 = Math.abs(numlist[j]-n);
            if(key1>key2){
                temp = numlist[j];
                numlist[j] = numlist[j-1];
                numlist[j-1] = temp;
            }
            if(key1 == key2&&numlist[j]>numlist[j-1]){
                temp = numlist[j-1];
                numlist[j-1] = numlist[j];
                numlist[j] = temp;
                console.log(...numlist)
            }
        }
    }
    return numlist;
}