function solution(s, skip, index) {
    var answer = '';
    let arrSkipNum = [];
    let arrSNum = [];
    
    let arrSkip = skip.split("").map(v=>v.charCodeAt());
    arrSNum = s.split("").map(v=>v.charCodeAt())
    for(let i=0;i<arrSNum.length;i++){
        for(let j=1;j<=index;j++){
            arrSNum[i]++;
            if(arrSkip.includes((arrSNum[i]-97)%26+97))j--;
        }
    }
    answer = arrSNum.map(v=>((v-97)%26+97));
    answer = String.fromCharCode(...answer);
    return answer;
}