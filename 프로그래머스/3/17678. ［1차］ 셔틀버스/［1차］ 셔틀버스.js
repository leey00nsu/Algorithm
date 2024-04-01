/*
셔틀은 09:00부터 총 n회 t분 간격으로 역에 도착하며, 하나의 셔틀에는 최대 m명의 승객이 탈 수 있다.
셔틀은 도착했을 때 도착한 순간에 대기열에 선 크루까지 포함해서 대기 순서대로 태우고 바로 출발한다. 
    - 예를 들어 09:00에 도착한 셔틀은 자리가 있다면 09:00에 줄을 선 크루도 탈 수 있다.
어떤 크루가 몇 시에 셔틀 대기열에 도착하는지 알아냈다. 
콘이 셔틀을 타고 사무실로 갈 수 있는 도착 시각 중 제일 늦은 시각을 구하여라.
    - 단, 콘은 게으르기 때문에 같은 시각에 도착한 크루 중 대기열에서 제일 뒤에 선다
    - 모든 크루는 잠을 자야 하므로 23:59에 집에 돌아간다. 따라서 어떤 크루도 다음날 셔틀을 타는 일은 없다.
*/

function timeToMinute(time) {
    const [hour,minute] = time.split(':').map(Number)
    
    return hour*60 + minute
}

function minuteToTime(m) {
    const hour = Math.floor(m / 60)
    const minute = m % 60
    
    let hourPad = ''
    let minutePad = ''
    
    if(hour < 10) hourPad = '0'
    if(minute < 10) minutePad = '0'
    
    return `${hourPad}${hour}:${minutePad}${minute}`
}

function solution(n, t, m, timetable) {
    let timeArr = timetable.map(time => timeToMinute(time)).sort((a,b) => a-b)
    let currentTime = 540 // 09:00
    
    while(n > 0) {
        const canOnBoard = timeArr.filter(t => t <= currentTime)
        const onBoardCnt = Math.min(m,canOnBoard.length)
        const onBoard = canOnBoard.slice(0,onBoardCnt)
        
        timeArr = timeArr.slice(onBoardCnt)
        
        if(n === 1 && onBoardCnt === m) {
            currentTime = Math.max(...onBoard)-1
    
            break
        }
        if(n === 1 && onBoardCnt < m) {

            break
        }
        
        currentTime += t
        n -= 1
    }
    
    
    
    return minuteToTime(currentTime);
}