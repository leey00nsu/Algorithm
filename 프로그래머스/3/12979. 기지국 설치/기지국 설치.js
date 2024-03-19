/*
N개의 아파트가 일렬로 있을 때, 모든 아파트를 만족시키기 위해 기지국을 세운다.
기지국의 최소 개수를 구한다.

기지국을 세울 때, 효과를 많이 끼치는 순으로 기지국을 세운다.

w=1 -> 3 (1*2+1)
w=2 -> 5 (2*2+1)
w=3 -> 7 (3*2+1)
*/

function solution(n, stations, w) {
    let stationCount = 0
    const coverage = w*2+1
    const stationSegment = []
    
    function propagation(index) {
        const start = index - w > 1 ? index - w : 1
        const end = index + w < n ? index + w : n
        
        stationSegment.push([start,end])
    }
    
    function getMinStation(length) {
        if(length === 0) return 0
        if(length === 1) return 1

        return Math.ceil(length / coverage)
    }
    
    stations.forEach(s => {
        propagation(s)
    })
    
    let position = 1
    
    stationSegment.forEach(s => {
        const [start,end] = s
        
        if(position > start) {
            position = end+1
        } else {
            stationCount += getMinStation(start - position)
            position = end+1
        }
    })
    

    stationCount += getMinStation(n+1 - position)


    return stationCount;
}