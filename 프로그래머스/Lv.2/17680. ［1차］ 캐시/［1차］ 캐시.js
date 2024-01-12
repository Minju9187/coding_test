function solution(cacheSize, cities) {
    var answer = 0;
    let cache = [];
    for(let i=0;i<cities.length;i++){
        let city = cities[i].toLowerCase();
        
        if(cache.includes(city)){
            answer += 1;
            cache.splice(cache.indexOf(city),1);
        }
        else answer += 5;
        
        cache.push(city);
        if(cache.length>cacheSize)cache.shift();
    }
    return answer;
}