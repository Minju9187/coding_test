function solution(phone_book) {
    var answer = true;
    let compare;
    
    phone_book.sort();
    console.log(phone_book);
    for(let i=0;i<phone_book.length-1;i++){
        compare = phone_book[i];
        if(phone_book[i+1].indexOf(compare)===0){
            return false;
        }
    }
    return answer;
}

// function solution(phone_book) {
//     phone_book.sort()

//     const isPrefix = phone_book.some((book,idx)=>{
//         return phone_book[idx+1]?.indexOf(book) === 0
//     })

//     return !isPrefix
// }   