class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return minValue;
  }

  peek() {
    return this.heap[0];
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.heap[currentIndex] >= this.heap[parentIndex]) {
        break;
      }

      [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
      currentIndex = parentIndex;
    }
  }

  heapifyDown(startIndex) {
    let currentIndex = startIndex;

    while (currentIndex * 2 + 1 < this.heap.length) {
      const leftChildIndex = currentIndex * 2 + 1;
      const rightChildIndex = currentIndex * 2 + 2;
      const minChildIndex = rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[leftChildIndex] ? rightChildIndex : leftChildIndex;

      if (this.heap[currentIndex] <= this.heap[minChildIndex]) {
        break;
      }

      [this.heap[currentIndex], this.heap[minChildIndex]] = [this.heap[minChildIndex], this.heap[currentIndex]];
      currentIndex = minChildIndex;
    }
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  for (const sco of scoville) {
    minHeap.push(sco);
  }

  let mixedCount = 0;

  while (minHeap.size() >= 2 && minHeap.peek() < K) {
    const first = minHeap.pop();
    const second = minHeap.pop();
    const mixedScov = first + second * 2;
    minHeap.push(mixedScov);
    mixedCount++;
  }

  return minHeap.peek() >= K ? mixedCount : -1;
}

// function solution(scoville, K) {
//     var answer = 0;
//     let cnt = 0;
//     scoville.sort((a,b)=>a-b,0);

//     while(true){
//         if(scoville[0] >= K)break;
        
//         if(scoville.length===1)return -1;
        
//         scoville[1] = scoville[0] + scoville[1]*2;
//         scoville.shift();
//         answer++;
//         scoville.sort((a,b)=>a-b,0);
//     }
//     return answer;
// }