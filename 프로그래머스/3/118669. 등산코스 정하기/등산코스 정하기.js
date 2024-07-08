/*
출입구에서 산봉우리로 가는 최단 경로를 모두 구하기
*/

class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChildIndex(index) {
        return 2 * index + 1;
    }

    rightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    add(element) {
        this.heap.push(element);
        this.bubbleUp();
    }

    poll() {
        if (this.isEmpty()) {
            return null;
        }
        if (this.size() === 1) {
            return this.heap.pop();
        }
        const item = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return item;
    }

    bubbleUp() {
        let index = this.size() - 1;
        while (index > 0 && this.heap[index][1] < this.heap[this.parentIndex(index)][1]) {
            this.swap(index, this.parentIndex(index));
            index = this.parentIndex(index);
        }
    }

    bubbleDown() {
        let index = 0;
        while (this.leftChildIndex(index) < this.size()) {
            let smallerChildIndex = this.leftChildIndex(index);
            if (this.rightChildIndex(index) < this.size() && this.heap[this.rightChildIndex(index)][1] < this.heap[smallerChildIndex][1]) {
                smallerChildIndex = this.rightChildIndex(index);
            }

            if (this.heap[index][1] <= this.heap[smallerChildIndex][1]) {
                break;
            }

            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }
}

function solution(n, paths, gates, summits) {
    const pathList = Array(n+1).fill(0).map(el => [])
    const intensity = Array(n + 1).fill(Infinity);
    
    paths.forEach(path => {
        const [i,j,w] = path
        
        pathList[i].push([j,w])
        pathList[j].push([i,w])
    })
    
    const heap = new MinHeap()
    
    for(const gate of gates) {
        heap.add([gate, 0]);
        intensity[gate] = 0;
    }
    
    
    while(heap.size()) {
        const [currentIndex,currentIntensity] = heap.poll()
        
        if(summits.includes(currentIndex) || currentIntensity > intensity[currentIndex]) continue
        
        for(const [nextIndex,nextIntensity] of pathList[currentIndex]) {
            const newIntensity = Math.max(currentIntensity,nextIntensity)
            
            if(newIntensity < intensity[nextIndex]) {
                intensity[nextIndex] = newIntensity
                heap.add([nextIndex,newIntensity])
            }
        }
    }
    
    const result = intensity.map((value,idx) => [idx,value]).filter(el => summits.includes(el[0])).sort((a,b) => a[1] - b[1] || a[0] - b[0])
    
    

    
    
    
    return result[0]
}