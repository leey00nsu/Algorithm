// 한 번 사용한 객실은 퇴실 시간을 기준으로 10분 후에 사용할 수 있다.
// 최소한의 객실로 예약 손님을 받으려고 한다.


function timeConvert(hour,min) {
    return Number(hour)*60 + Number(min)
}

function solution(book_time) {
    const convertedBookTime = book_time.map(bookTime => {
        const [startTime,endTime] = bookTime
        
        const [startHour,startMinute] = startTime.split(':')
        const convertedStartTime = timeConvert(startHour,startMinute)
        
        const [endHour,endMinute] = endTime.split(':')
        const convertedEndTime = timeConvert(endHour,endMinute)
        
        return [convertedStartTime,convertedEndTime]
    })
    
    const sortedBookTime = convertedBookTime.sort((a,b) => {
        if(a[0]>b[0]) return 1
        if(a[0]===b[0]) return 0
        if(a[0]<b[0]) return -1
    })
    
    const roomConditions = []
    let cnt=0
    
    sortedBookTime.forEach(bookTime => {
        const [startTime,endTime] = bookTime

        if(roomConditions.length === 0) {
            roomConditions.push(endTime)
        } else {
            const targetIndex = roomConditions.findIndex(el => el+10 <= startTime)
            
            if(targetIndex !== -1) {
                roomConditions[targetIndex] = endTime
            } else {
                roomConditions.push(endTime)
            }
        }
        
    })
    console.log(sortedBookTime)
    console.log(roomConditions)
    
    return roomConditions.length;
}