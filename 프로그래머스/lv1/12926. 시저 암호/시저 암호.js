// 아스키코드 A~Z 65~90  charCodeAt
//          a~z 97~122  fromCharCode

function solution(s, n) {
    var answer = '';
    let arr=[];
    let a;
    
    arr=s.split("");
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=" "){

            a = arr[i].charCodeAt(0);

            if(a>=65&&a<=90)a = (a + n -65)%26 + 65;
            if(a>=97&&a<=122)a = (a + n -97)%26 + 97;
            
            arr[i] = String.fromCharCode(a);
        }
    }
    answer = arr.join("");
    
    return answer;
}