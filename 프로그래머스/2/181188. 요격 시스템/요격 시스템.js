/*
미사일을 최소로 사용해서 모든 폭격 미사일을 요격하려 합니다.
B 나라는 특정 x 좌표에서 y 축에 수평이 되도록 미사일을 발사하며, 발사된 미사일은 해당 x 좌표에 걸쳐있는 모든 폭격 미사일을 관통하여 한 번에 요격할 수 있습니다. 
*/

function solution(targets) {
    targets.sort((a,b) => a[1] - b[1])
    
    let cnt = 0
    let position = -1
    
    targets.forEach(t => {
        const [s,e] = t
        
        if(s >= position) {
            cnt += 1
            position = e
        }
    })

    return cnt;
}