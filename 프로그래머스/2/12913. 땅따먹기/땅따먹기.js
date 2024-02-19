function solution(land) {
    for (let i = 1; i < land.length; i++) {
        for (let j = 0; j < 4; j++) {
            //filter로 나랑 idx가 다른 위의 행에서 가장 큰 수를 찾아 더해줌
            land[i][j] += Math.max(...land[i - 1].filter((_, idx) => j !== idx));
        }
    }
    return Math.max(...land[land.length-1]);
}