function solution(participant, completion) {
    let 객체 = {};
    participant.forEach(v=>{
        if(객체[v] === undefined){
            객체[v] = 1;
        }else{
            객체[v]++; 
        }
    })
    
    completion.forEach(v=>{
        객체[v]--; 
    }) 
    
    for(let i in 객체){
        if(객체[i] === 1){
            return i;
        }
    }
}
// function solution(participant, completion) {
//     let answer = '';

//     participant.sort((a, b) => a > b ? 1 : -1);
//     completion.sort((a, b) => a > b ? 1 : -1);

//     for(let i = 0; i < participant.length; i++) {
//         if(participant[i] !== completion[i]) {
//             answer = participant[i];
//             break;
//         }
//     }
//     return answer;
// }
// // function solution(participant, completion) {
// //     var answer = '';
// //     participant.sort((a, b) => a > b ? 1 : -1);
// //     completion.sort((a, b) => a > b ? -1 : 1);
// //     for(let i=0;i<completion.length;i++){
// //         let a = participant.indexOf(completion[i]);
// //         if(a>=0){
// //             participant.splice(a,1);
// //         }
// //     }
// //     return participant[0];
// // }