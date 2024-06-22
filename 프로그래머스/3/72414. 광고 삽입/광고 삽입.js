/*

*/

function parseTime(str) {
    const [h,m,s] = str.split(':').map(Number)
    
    return h*60*60 + m * 60 + s
}

function timeToStr(time) {
    const h = Math.floor(time / (60*60))
    time -= h * 60 * 60
    const m = Math.floor(time / (60))
    time -= m * 60
    const s = time
    
    const hLeftPad = h < 10 ? '0' : ''
    const mLeftPad = m < 10 ? '0' : ''
    const sLeftPad = s < 10 ? '0' : ''
    
    
    return `${hLeftPad}${h}:${mLeftPad}${m}:${sLeftPad}${s}`
}

function solution(play_time, adv_time, logs) {
    const maxTime = parseTime(play_time)
    const targetTime = parseTime(adv_time)
    
    // 시청자수와 시청된 구간을 저장하는 배열
    const viewArr = Array(maxTime+1).fill(0)
    
    const timeLogs = []
    logs.forEach(l => {
        const [start,end] = l.split('-')
        
        viewArr[parseTime(start)] += 1
        viewArr[parseTime(end)] -= 1
    })

     
    for(let i=1;i<viewArr.length;i++) {
        viewArr[i] = viewArr[i] + viewArr[i-1] 
    }
    
    for(let i=1;i<viewArr.length;i++) {
        viewArr[i] = viewArr[i] + viewArr[i-1] 
    }
    
    let maxSum = viewArr[targetTime-1]
    let idx = 0
    
    for(let i=1;i<maxTime-targetTime;i++) {
        const sum = viewArr[targetTime+i] - viewArr[i]
        if(maxSum < sum) {
            maxSum = sum
            idx = i + 1 
        }
    }
    
    return timeToStr(idx)
}