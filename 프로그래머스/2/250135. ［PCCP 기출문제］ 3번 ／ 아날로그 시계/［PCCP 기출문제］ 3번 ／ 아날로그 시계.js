/*
시계의 시침은 12시간마다, 분침은 60분마다, 초침은 60초마다 시계를 한 바퀴 돕니다. 
따라서 시침, 분침, 초침이 움직이는 속도는 일정하며 각각 다릅니다.
이 시계에는 초침이 시침/분침과 겹칠 때마다 알람이 울리는 기능이 있습니다. 
당신은 특정 시간 동안 알람이 울린 횟수를 알고 싶습니다.

시침은 12시간마다 한 바퀴를 돈다.
-> 12 * 60 * 60 초 마다 한 바퀴를 돈다.
-> 시침의 현재 위치는 현재 초 / 12 * 60 * 60 이다.
*/


function solution(h1, m1, s1, h2, m2, s2) {

    const hStandard = 12 * 60 * 60
    const mStandard = 60 * 60
    const sStandard = 60
    
    let currentH = h1
    let currentM = m1
    let currentS = s1
    let currentTime = currentH * 60 * 60 + currentM * 60 + currentS
    const endTime = h2 * 60 * 60 + m2 * 60 + s2
    
    let cnt = 0
    
    while(currentTime <= endTime) {
        const relativeH = currentH >= 12 ? currentH-12 : currentH
        let currentHPosition = (relativeH*60*60+currentM*60+currentS) / hStandard
        let currentMPosition = (currentM*60+currentS) / mStandard
        let currentSPosition = currentS / sStandard
        
        let nextHPosition = (relativeH*60*60+currentM*60+currentS+1) / hStandard
        let nextMPosition = (currentM*60+currentS+1) / mStandard
        let nextSPosition = (currentS+1) / sStandard
        let nextTime = currentTime + 1
         
        if(currentHPosition === currentMPosition || currentMPosition === currentSPosition) {
            cnt += 1
        }
        if(nextTime <= endTime && nextSPosition > nextHPosition && currentSPosition < currentHPosition) {
            cnt += 1
        } 
        if(nextTime <= endTime && nextSPosition > nextMPosition && currentSPosition < currentMPosition) {
            cnt += 1
        } 
        
        currentS += 1
        
        if(currentS === 60) {
            currentM += 1
            currentS = 0
        }
        if(currentM === 60) {
            currentH += 1
            currentM = 0
        }
        
        currentTime = currentH * 60 * 60 + currentM * 60 + currentS
    }
    


    return cnt
}