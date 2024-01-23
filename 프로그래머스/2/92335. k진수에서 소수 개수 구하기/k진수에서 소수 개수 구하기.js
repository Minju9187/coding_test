function solution(n, k) {
    var answer = 0;
    let a = n.toString(k).split("0").map(v=>Number(v));
    
    for(let i=0;i<a.length;i++){
        if(a[i]!=""){
            if(isPrime(a[i]))answer++;
        }
    }
    return answer;
}

function isPrime(num) {
	if(num === 1) return false;
 	for(let i = 2; i <= Math.sqrt(num); i++) {
  		if(num % i === 0) return false;
	} 
  return true;
}