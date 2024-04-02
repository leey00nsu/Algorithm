/*
지도에서 강철부대가 위치한 지역을 포함한 각 지역은 유일한 번호로 구분되며
두 지역 간의 길을 통과하는 데 걸리는 시간은 모두 1로 동일합니다
임무를 수행한 각 부대원은 지도 정보를 이용하여 최단시간에 부대로 복귀하고자 합니다
복귀가 불가능한 부대원도 있을 수 있습니다.

한 점에서 특정 점까지의 최단거리. -> 다익스트라
*/

function solution(n, roads, sources, destination) {
    const visited = {}
    const queue = [destination]
    const roadMap = {}
    const distance = Array(n+1).fill(Infinity)
    
    roads.forEach(road => {
        const [from,to] = road
        roadMap[from] = roadMap[from] ? [...roadMap[from],to] : [to]
        roadMap[to] = roadMap[to] ? [...roadMap[to],from] : [from]
    })
    
    distance[destination] = 0
    
    while (queue.length > 0) {
        const current = queue.shift(); 
        
        roadMap[current].forEach(next => {
            if (distance[next] > distance[current] + 1) {
                distance[next] = distance[current] + 1;
                queue.push(next); 
            }
        });
    }
    
    
    
    return sources.map(s => {
        if(distance[s] === Infinity) return -1
        return distance[s]
    });
}