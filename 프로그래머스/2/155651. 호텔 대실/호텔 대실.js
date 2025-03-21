function solution(book_time) {
    let room = [-10];
    for(let i = 0 ; i < book_time.length; i++){
        let [a,b] = book_time[i];
        book_time[i][0] = Number(a.split(":").join(""));
        book_time[i][1] = Number(b.split(":").join(""));
    }
    book_time.sort((a,b)=>a[0]-b[0]);
    console.log(book_time);
    for(let i = 0 ; i < book_time.length;i++){
        let [a,b] = book_time[i];
        let key = false;
        for(let j =0 ; j < room.length;j++){
            let time = room[j] + 10;
            if(time % 100 >= 60){
                time += 100 - 60;
            }
            if(time <= a){
                room[j] = b;
                key = true;
                break;
            }
        }
        if(!key){
            room.push(b);
        }
    }
    return room.length;
}