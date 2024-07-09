/*
CPU에는 여러 개의 코어가 있고, 코어별로 한 작업을 처리하는 시간이 다릅니다.
한 코어에서 작업이 끝나면 작업이 없는 코어가 바로 다음 작업을 수행합니다.
2개 이상의 코어가 남을 경우 앞의 코어부터 작업을 처리 합니다.

코어의 처리 시간 = 코어가 작업을 처리한 후 다음 작업까지 대기할 시간

파라메트릭 서치
*/


function solution(n, cores) {
    if(cores.length > n) return n
    
    let left = 0
    let right = Math.min(...cores) * n
    
    function work(time) {
        // 시작 코어 처리
        let jobs = cores.length
        for(let core of cores) {
            jobs += Math.floor(time / core)
        }
        
        return jobs
    }
    
    while (left < right) {
        const mid = Math.floor((left+right)/2)
        const jobs = work(mid)
        
        if(jobs >= n) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    
    // 마지막 작업이 완료된 시간
    const time = left
    
    let lastJobs = cores.length
    for(let core of cores) {
        lastJobs += Math.floor((time-1) / core)
    }
    
    for(let i=0;i<cores.length;i++) {
        if(time % cores[i] === 0) {
            lastJobs += 1
        }
        if(lastJobs === n) return i+1
    }
}