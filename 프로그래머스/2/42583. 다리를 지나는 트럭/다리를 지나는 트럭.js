function solution(bridge_length, weight, truck_weights) {
    let bridge = new Array(bridge_length).fill(0);
    let time = 0;
    
    while(bridge.length) {
        bridge.shift();
        if(truck_weights.length){
            const sumBridge = bridge.reduce((a,b) => a + b, 0)
            if(sumBridge + truck_weights[0] <= weight){
                bridge.push(truck_weights.shift())
            } else {
                bridge.push(0)
            }
        }
        //  ex)
        // 	[ 0, 7 ] 1s
        //  [ 7, 0 ] 2s
        //  [ 0, 4 ] 3s
        //  [ 4, 5 ] 4s
        //  [ 5, 0 ] 5s
        //  [ 0, 6 ] 6s
        time++
     }
    return time
}