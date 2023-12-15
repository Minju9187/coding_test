function solution(id_list, report, k) {
    var answer = [];
    let id_list_obj = {};
    let cnt_obj = {};
    let stop = [];
    for(let i=0;i<id_list.length;i++){
        id_list_obj[id_list[i]] = [];
        cnt_obj[id_list[i]] = 0;
    }
    for(let i=0;i<report.length;i++){
        let [신고유저, 신고한ID] = report[i].split(" ");
        if(!id_list_obj[신고유저].includes(신고한ID)){
            id_list_obj[신고유저].push(신고한ID);
        }
    }
    let id_list_arr = Object.values(id_list_obj);
    for(let i=0;i<id_list_arr.length;i++){
        if(id_list_arr[i].length===0)continue;
        else{
            for(let j=0;j<id_list_arr[i].length;j++){
                cnt_obj[id_list_arr[i][j]]++;
            }
        }
    }
    for(let i=0;i<id_list.length;i++){
        if(cnt_obj[id_list[i]]>=k)stop.push(id_list[i]);
    }
    answer = Array(id_list.length).fill(0);
    for(let i=0;i<id_list.length;i++){
        for(let j=0;j<stop.length;j++){
            if(id_list_obj[id_list[i]].includes(stop[j]))answer[i]++;
        }
    }
    return answer;
}