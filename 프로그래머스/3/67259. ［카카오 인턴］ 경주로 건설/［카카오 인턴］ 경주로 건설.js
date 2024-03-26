/*
bfs로 모든 경로를 구한 뒤, 최소 비용을 계산한다
*/

class MinHeap {
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
      this.heap[currentIdx] < this.heap[parentIdx]
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
      (this.heap[leftIdx] && this.heap[leftIdx] < this.heap[currentIdx]) ||
      (this.heap[rightIdx] && this.heap[rightIdx] < this.heap[currentIdx])
    ) {
      let smallerIdx = leftIdx;
      if (this.heap[rightIdx] && this.heap[leftIdx] > this.heap[rightIdx]) {
        smallerIdx = rightIdx;
      }

      this.swap(currentIdx, smallerIdx);
      currentIdx = smallerIdx;
      leftIdx = currentIdx * 2 + 1;
      rightIdx = currentIdx * 2 + 2;
    }
  }
}

function solution(board) {
    const visited = {}
    const queue = new MinHeap()
    const maxLength = board.length - 1
    const prices = []
    const di = [-1,0,1,0]
    const dj = [0,-1,0,1]
    
    queue.push({i:0,j:0,direction:'i',price:0})
    queue.push({i:0,j:0,direction:'j',price:0})
    
    
    while(queue.size() > 0) {
        const {i,j,direction,price} = queue.pop()
        
        if(visited[`${i},${j},${direction}`] < price) {
            continue
        }
        
        if(i === maxLength && j === maxLength) prices.push(price)
        
        visited[`${i},${j},${direction}`] = price
        
        for(let k=0;k<4;k++) {
            let nI = i + di[k]
            let nJ = j + dj[k]
            let nD = nI === i ? 'j' : 'i'
            let nP = direction === nD ? price+100 : price+600
            if(nI>=0 && nJ>=0 && nI<=maxLength && nI<=maxLength && nJ<=maxLength && board[nI][nJ] === 0 &&
              (!visited[`${nI},${nJ},${nD}`] || visited[`${nI},${nJ},${nD}`] > nP)) {
                queue.push({i:nI,j:nJ,direction:nD,price:nP})
            }
        }
        
        
        
    }
    
    console.log(prices)
    
    
    
    return Math.min(...prices);
}