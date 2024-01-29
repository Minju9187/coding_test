//BFS(너비 우선 탐색)는 주로 큐를 사용하여 구현
//DFS(깊이 우선 탐색)는 재귀를 사용

// function solution(maps) {
//     let answer = -1;
//     return DFS([0,0],maps,1);
// }

// function DFS(currentLocation, maps, tried){
//         const dx = [1,0,-1,0];
//         const dy = [0,1,0,-1];
//         let [rowIdx, columnIdx] = currentLocation;
//         //적 진영 도착했을시
//         if(rowIdx === maps.length - 1 && columnIdx === maps[0].length - 1){
//             return tried;
//         }
//         //주위에서 1이 있는곳으로 탐색
//         for(let i=0;i<4;i++){
//             const newRowIdx = rowIdx + dx[i]
//             const newColumnIdx = columnIdx + dy[i]
//             if(newRowIdx >=0 && newRowIdx < maps.length && newColumnIdx >=0 && newColumnIdx < maps[0].length && maps[newRowIdx][newColumnIdx] === 1){
//                 maps[newRowIdx][newColumnIdx] = 0
//                 const result = DFS([newRowIdx,newColumnIdx], maps, tried + 1);
//                 //최단거리를 찾아야 하기 때문
//                 if(result !== -1){
//                     return result;
//                 }
//             }
//         }
//     // 도달하지 못하면 -1리턴
//     return -1;
// }

function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    const queue = [];
    queue.push([0, 0, 1]); // 시작 좌표와 거리를 큐에 추가
    maps[0][0] = 0; // 시작 지점은 방문 처리

    while (queue.length > 0) {
        const [x, y, distance] = queue.shift();

        if (x === n - 1 && y === m - 1) {
            // 목적지에 도달했을 때
            return distance;
        }

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
                // 범위 내에 있고, 벽이 아닌 경우
                queue.push([nx, ny, distance + 1]);
                maps[nx][ny] = 0; // 방문 처리
            }
        }
    }

    return -1; // 목적지에 도달할 수 없는 경우
}