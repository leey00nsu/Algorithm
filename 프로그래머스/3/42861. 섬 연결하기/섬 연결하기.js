/*
최소의 비용으로 모든 섬이 서로 통행 가능하도록 한다.

*/


function solution(n, costs) {
    const parent = []
    const edges = [...costs].sort((a,b) => a[2]-b[2])
    let edgeCount = 0
    let count = 0
    
    for(let i=0;i<n;i++) {
        parent.push(i)
    }
    
    function getParent(idx) {
        if(parent[idx] === idx) return idx
        else return getParent(parent[idx])
    }
    
    function isUnion(from,to) {
        if(getParent(from) === getParent(to)) return true
        return false
    }
    
    while(edgeCount !== n-1) {
        const [from,to,d] = edges.shift()
        
        if(isUnion(from,to)) continue
        
        const fromParent = getParent(from)
        const toParent = getParent(to)
        
        if(fromParent>toParent) {
            parent[fromParent] = toParent
        } else {
            parent[toParent] = fromParent
        }
        
        count += d
        edgeCount+=1
    }
    
    
    return count;
}