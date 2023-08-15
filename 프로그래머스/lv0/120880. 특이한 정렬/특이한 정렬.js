function solution(numlist, n) {
    var answer = [];
    numlist.sort((a,b)=>a-n)
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
            }
        }
    }
    return numlist;
}
// function solution(numlist, n) {
//     numlist.sort((a,b) => {
//         if(Math.abs(n - a) === Math.abs(n - b)){
//             if(a > b) return -1
//             else return 1;
//         }
//         else if(Math.abs(n - a) > Math.abs(n - b)) return 1;
//         else return -1;
//     })
//     return numlist;
// }