function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let a,b;
    let denom;
    let k=1;
    denom = getLCM(denom1,denom2);
    a = numer1*(denom/denom1);
    b = numer2*(denom/denom2);
    
    for(let i=0;i<denom+1;i++){
        if((a+b)%i==0&&(denom)%i==0){
           k = i; 
        }
    }
    
    answer[0] = (a + b)/k;
    answer[1] = denom/k;
    return answer;
}

function getLCM(num1, num2){
	let lcm = 1;
   
    while(true){
      if((lcm % num1 == 0) && (lcm % num2 == 0)){
        break;
      }
      lcm++;
    }
  	return lcm
}