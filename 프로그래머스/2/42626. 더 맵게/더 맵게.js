/*
1. 힙은 완전 이진 트리를 배열로 구현한다.
2. 삽입은 마지막에 넣고 부모보다 작으면 위로 올라간다 (heapify-up).
3. 삭제는 루트를 제거하고, 마지막 원소를 위로 올린 뒤 자식보다 크면 아래로 내려간다 (heapify-down).
4. 자식은 왼쪽 2i+1, 오른쪽 2i+2. 부모는 (i-1)//2.
5. 모든 비교는 min-heap은 작게, max-heap은 크게 유지하는 방향으로.
*/

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    getLeftChildIndex(i) {
        return i*2+1
    }
    
    getRightChildIndex(i) {
        return i*2+2
    }
    
    getParentIndex(i) {
        return Math.floor((i-1)/2)
    }
    
    swap(i,j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
    
    push(value) {
        this.heap.push(value)
        this.heapifyUp()
    }
    
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop()
        
        const top = this.heap[0]
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        
        return top
    }
    
    heapifyUp() {
        let index = this.heap.length - 1
        
        while(index > 0 && this.heap[this.getParentIndex(index)] > this.heap[index]) {
            this.swap(index, this.getParentIndex(index))
            index = this.getParentIndex(index)
        }
    }
    
    heapifyDown(index = 0) {
        let smallest = index;

        const left = this.getLeftChildIndex(index)
        const right = this.getRightChildIndex(index)

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }
    
    peek() {
        return this.heap[0]
    }
    
    size() {
        return this.heap.length
    }
}

function solution(scoville, K) {
    const pq = new MinHeap()
    let count = 0
    
    scoville.forEach(s => {
        pq.push(s)
    })
    
    while(pq.peek() < K && pq.size() >= 2) {
        const scoville1 = pq.pop()
        const scoville2 = pq.pop()
        
        pq.push(scoville1 + (scoville2 * 2))
        count += 1
    }
    
    return pq.peek() >= K ? count : -1
}