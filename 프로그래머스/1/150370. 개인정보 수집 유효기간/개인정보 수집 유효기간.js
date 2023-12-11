function solution(today, terms, privacies) {
    var answer = [];
    let object = {};
    let [today_year, today_month, today_day] = today.split(".");
    //today 날짜 숫자로 변환
    today_year = Number(today_year);
    today_month = Number(today_month);
    today_day = Number(today_day);
    //terms type,month 객체로 만들기
    for(let i=0;i<terms.length;i++){
        let [terms_type,terms_month] = terms[i].split(" ");
        object[terms_type] = terms_month;
    }
    //privacies 돌면서 파기해야 할 정보 찾기
    for(let i=0;i<privacies.length;i++){
        let [date,type]=privacies[i].split(" ");
        let [year,month,day]= date.split(".");
        month = Number(month) + Number(object[type]);
        year = Number(year);
        day = Number(day);
        //month가 12 넘을 때 year로 바꿔주기
        while(month>12){
            month = month-12;
            year = year + 1;
        }
        
        if(today_year>year){
            answer.push(i+1);
        }
        else if(today_year===year){
            if(today_month>month)answer.push(i+1);
            else if(today_month===month){
                if(today_day>=day)answer.push(i+1);
            }
        }
    }
    return answer;
}