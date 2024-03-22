/*

*/

function solution(n, edge) {
    const sortedEdge = edge.map(e => e.sort((a,b) => a-b))
    const map = {}
    const queue = []
    const distance = Array(n).fill(Infinity)
    
    distance[0] = 0
    
    sortedEdge.forEach(e => {
        const [v1,v2] = e
        map[v1] = map[v1] ? [...map[v1],v2] : [v2]
        map[v2] = map[v2] ? [...map[v2],v1] : [v1]
    })
    
    queue.push([map[1],1])
    
    while(queue.length > 0) {
        const [nodes,depth] = queue.shift()
        
        nodes.forEach(n => {
            if(map[n] && distance[n-1] === Infinity) {
                queue.push([map[n],depth+1])
            }
            if(distance[n-1] === Infinity) {
                distance[n-1] = depth
            }
        })
    }
    
    const maxDistance = Math.max(...distance)
    const count = distance.filter(d => d === maxDistance).length
    
    return count;
}