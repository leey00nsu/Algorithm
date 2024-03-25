/*
n명이 심사를 받는다.
심사관마다 소요시간이 다르다.
한 심사대에서는 동시에 한 명만 심사를 할 수 있다.
가장 앞에 서는 사람은 비어있는 심사대로 가거나, 더 빨리 끝나는 심사대를 기다린다.
모든 사람이 심사를 받는데 걸리는 시간을 최소로 한다.
*/

function solution(n, times) {
    times.sort((a,b) => a-b)
    
    let left = 0
    let right = times.at(-1)*n
    let minTime = right
    
    while(left <= right) {
        let mid = Math.floor((left+right)/2)
        let people = 0
        
        for(let i=0;i<times.length;i++) {
            people += Math.floor(mid/times[i])
        }
        
        if(people >= n) {
            right = mid - 1
            minTime = mid
        } else {
            left = mid + 1
        }
    }
    
    return minTime;
}