function solution(numer1, denom1, numer2, denom2) {
    let Top = numer1 * denom2 + numer2 * denom1
    let Bot = denom1 * denom2
    let min = 1
    for (let i=1; i<=Bot; i++){
        if (Top%i === 0 && Bot%i === 0) {
            min = i
        }
    }
    return [Top/min, Bot/min]
}