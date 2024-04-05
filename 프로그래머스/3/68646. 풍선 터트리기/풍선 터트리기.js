/*
풍선들을 단 1개만 남을 때까지 계속 터트리려고 합니다.
- 임의의 인접한 두 풍선을 고른 뒤, 두 풍선 중 하나를 터트립니다.
- 터진 풍선으로 인해 풍선들 사이에 빈 공간이 생겼다면, 빈 공간이 없도록 풍선들을 중앙으로 밀착시킵니다.
- 인접한 두 풍선 중에서 번호가 더 작은 풍선을 터트리는 행위는 최대 1번만 할 수 있습니다.

최후까지 남기는 것이 가능한 풍선들의 개수

가장 작다면 나머지를 모두 터뜨릴 수 있으므로 언제나 최후까지 남는다.
배열을 반으로 나누어, 왼쪽과 오른쪽에서 한 쪽만 자신보다 작다면 최후까지 남을 수 있다.
만약, 왼쪽과 오른쪽 모두 자신보다 작다면 최후까지 남을 수 없다.

-92,-71,-68,-61,-33


*/

function solution(a) {
    let cnt = a.length
    let leftMinArr = Array(a.length)
    let rightMinArr = Array(a.length)
    
    leftMinArr[0] = a[0]
    
    for(let i=1;i<a.length;i++) {
        const minValue = Math.min(leftMinArr[i-1],a[i])
        leftMinArr[i] = minValue
    }
    
    rightMinArr[a.length-1] = a[a.length-1]
    
    for(let i=a.length-2;i >= 0;i--) {
        const minValue = Math.min(rightMinArr[i+1],a[i])
        rightMinArr[i] = minValue
    }
    
    for(let i=0;i<a.length;i++) {
        if(a[i] > leftMinArr[i] && a[i] > rightMinArr[i]) {
            cnt -= 1
        }
    }
    
    return cnt;
}
