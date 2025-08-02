function solution(citations) {
    const n = citations.length
    const hIndexes = []
    
    citations.sort((a,b) => b - a)

    for(let i=0; i<n; i++) {
        if(citations[i] < i+1) {
            return i
        }
    }

    
    return n
}