function solution(phone_book) {
    var answer = true;
    let compare;
    
    phone_book.sort();
    for(let i=0;i<phone_book.length-1;i++){
        compare = phone_book[i];
        if(phone_book[i+1].indexOf(compare)===0){
            return false;
        }
    }
    return answer;
}