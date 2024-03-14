/*
*/

function solution(operations) {
    const q = []
    
    operations.forEach(operation => {
        const [op,n] = operation.split(' ')
        
        if(op === 'I') {
            q.push(Number(n))
            q.sort((a,b) => a - b)
        }
        if(op === 'D' && Number(n) === -1) {
            q.shift()
        }
        if(op === 'D' && Number(n) === 1) {
            q.pop()
        }
        
    })
    
    if(q.length === 0) return [0,0]
    
    return [q.at(-1),q[0]];
}