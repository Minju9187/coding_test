//readline 모듈 - 한 줄씩 입출력을 처리할 수 있게 도와줌
//모듈을 불러오기 위해서는 require("모듈 이름")을 선언하고 변수를 선언해 저장함
const readline = require('readline');
//readline 객체를 만듬
//객체를 이용해 콘솔에서 표준 입출력을 처리할 수 있음
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
//line 이벤트로 사용자가 콘솔에 입력할 때 발생
//줄바꿈을 나타내는 제어문자나 사용자가 Enter나 Return을 누를 때 발생
rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    console.log(str);
});
//더 이상 입력받을 것이 없을 때, rl.close()를 호출하여 발생
