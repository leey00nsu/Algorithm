/*

*/

function getNext(n) {
    let result = n
    if(n%2 === 0) {
        result = result / 2
    } else {
        result = result * 3 + 1
    }
    
    return result
}

function getArea(x1,y1,x2,y2) {
    const maxY = Math.max(y1,y2)
    const minY = Math.min(y1,y2)
    const xDiff = Math.abs(x1-x2)
    
    const area = minY * xDiff + (maxY - minY) * xDiff / 2
    
    return area
}

function solution(k, ranges) {
    const arr = [k]
    
    
    let current = k
    
    while(current > 1) {
        const next = getNext(current)

        arr.push(next)
        
        current = next
    }
    
    const n = arr.length - 1
    const areas = []
    const result = []
    
    for(let i=1;i<arr.length;i++) {
        const x1 = i
        const y1 = arr[x1]
        const x2 = i-1
        const y2 = arr[x2]
        
        areas.push(getArea(x1,y1,x2,y2))
    }
    
    ranges.forEach(r => {
        const [rFrom,rTo] = r
        
        const from = rFrom
        const to = n + rTo
        
        if(from > to) {
            result.push(-1)
        } else {
            const slice = areas.slice(from,to)
        
            const sum = slice.reduce((acc,cur) => acc += cur,0)
        
            result.push(sum)
        }
    })
    
    
    
    return result;
}