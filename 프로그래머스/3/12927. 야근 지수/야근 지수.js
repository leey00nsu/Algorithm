/*
야근 피로도 = 야근 시작 시점 + 남은 일의 작업량의 제곱
N시간 동안 야근 피로도를 최소화하도록 일한다.
1시간동안 작업량 1만큼 처리한다.

N 시간 일했을 때 야근 피로도를 최소화한 값을 구한다.

야근 피로도는 작업량의 제곱으로 늘어나므로, 가장 큰 수부터 줄이는 것이 가장 빠르게 줄일 수 있다.
*/

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return min;
  }

  bubbleUp() {
    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor((currentIdx - 1) / 2);

    while (
      this.heap[parentIdx] &&
      this.heap[currentIdx] > this.heap[parentIdx]
    ) {
      this.swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  bubbleDown() {
    let currentIdx = 0;
    let leftIdx = currentIdx * 2 + 1;
    let rightIdx = currentIdx * 2 + 2;

    while (
      (this.heap[leftIdx] && this.heap[leftIdx] > this.heap[currentIdx]) ||
      (this.heap[rightIdx] && this.heap[rightIdx] > this.heap[currentIdx])
    ) {
      let smallerIdx = leftIdx;
      if (this.heap[rightIdx] && this.heap[leftIdx] < this.heap[rightIdx]) {
        smallerIdx = rightIdx;
      }

      this.swap(currentIdx, smallerIdx);
      currentIdx = smallerIdx;
      leftIdx = currentIdx * 2 + 1;
      rightIdx = currentIdx * 2 + 2;
    }
  }
}

function solution(n, works) {
    var answer = 0;
    const leftWorkCount = works.reduce((sum,cur) => sum+cur,0)
    
    if(leftWorkCount < n) return 0
    
    const leftWorks = new MaxHeap()
    
    for(let i=0;i<works.length;i++) {
        leftWorks.push(works[i])
    }
    
    while(n>0) {
        const maxWork = leftWorks.pop()
        leftWorks.push(maxWork - 1)
        n -= 1
    }
    
    
    return leftWorks.heap.map(w => w**2).reduce((sum,cur) => sum+cur,0);
}