function solution(fees, records) {
    var answer = [];
    let obj = {};
    let objCharge = {};
    let objCheck = {};
    let totalMinute;
    for(let i=0;i<records.length;i++){
        let [time,num,status] = records[i].split(" ")
        if(status == "IN"){
            obj[num] = time;
            objCheck[num] = "IN";
        }
        else{
            let [hour,minute] = time.split(":");
            let [beHour,beMinute] = obj[num].split(":");
            
            totalMinute = (hour - beHour) * 60 + (minute - beMinute);
            objCheck[num] = "OUT";
            
            if(!objCharge[num])objCharge[num] = totalMinute;
            else objCharge[num] += totalMinute;
        }
    }
    
    let arrNum = Object.keys(objCheck)
    arrNum.forEach(v=>{
        if(objCheck[v]=="IN"){
            let [beHour,beMinute] = obj[v].split(":");
            
            totalMinute = (23 - beHour) * 60 + (59 - beMinute);
            objCheck[v] = "IN";
            if(!objCharge[v])objCharge[v] = totalMinute;
            else objCharge[v] += totalMinute;
        }
    })
    
    arrNum.sort((a,b)=>a-b);
    arrNum.forEach(v=>{
        if(objCharge[v] <= fees[0])answer.push(fees[1]);
        else answer.push(fees[1] + Math.ceil((objCharge[v]-fees[0])/fees[2])*fees[3])
    })
    return answer;
}