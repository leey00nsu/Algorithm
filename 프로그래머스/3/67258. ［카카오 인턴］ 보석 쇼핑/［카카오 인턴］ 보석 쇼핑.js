/*
특정 범위의 물건을 모두 구매한다.
- 진열된 모든 종류의 보석을 적어도 1개 이상 포함하는 가장 짧은 구간

*/


function solution(gems) {
    const cnt = new Set(gems).size;
    const gemMap = new Map();
    const candidates = []
    
    gems.forEach((gem, i) => {
        gemMap.delete(gem);
        gemMap.set(gem, i);
        if (gemMap.size === cnt){
            candidates.push([gemMap.values().next().value + 1, i + 1])
        }
    })
    
    const minSection = candidates.sort((a,b) => (a[1]-a[0]) - (b[1]-b[0]))[0]
    
    return minSection;
}