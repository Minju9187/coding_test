function solution(today, terms, privacies) {
    var answer = [];
    let object = {};
    let [today_year, today_month, today_day] = today.split(".");
    today_year = Number(today_year);
    today_month = Number(today_month);
    today_day = Number(today_day);
    for(let i=0;i<terms.length;i++){
        let [terms_type,terms_month] = terms[i].split(" ");
        object[terms_type] = terms_month;
    }
    for(let i=0;i<privacies.length;i++){
        let [date,type]=privacies[i].split(" ");
        let [year,month,day]= date.split(".");
        month = Number(month) + Number(object[type]);
        year = Number(year);
        day = Number(day);
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