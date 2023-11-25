function solution(m, musicinfos) {
    const candidates = []
    const answer = []
    
    let mArr = m.split('')

    while(mArr.includes('#')) {
        let index = mArr.findIndex(el => el === '#')
        mArr.splice(index-1,2,mArr[index-1].toLowerCase())
    }
    
    mArr = mArr.join('')
    
    
    musicinfos.forEach(musicInfo => {
        let [startTime,endTime,title,sheet] = musicInfo.split(',')
        
        let [startHour,startMinute] = startTime.split(':')
        let convertedStartTime = Number(startHour)*60+Number(startMinute)
        
        let [endHour,endMinute] = endTime.split(':')
        let convertedEndTime = Number(endHour)*60+Number(endMinute)
        
        let timeDiff = convertedEndTime - convertedStartTime
        
        let sheetArr = sheet.split('')
        
        while(sheetArr.includes('#')) {
            let index = sheetArr.findIndex(el => el === '#')
            sheetArr.splice(index-1,2,sheetArr[index-1].toLowerCase())
        }
        
        let totalSong = ''
        for(let i=0;i<timeDiff;i++) {
            totalSong += sheetArr[i%sheetArr.length]
        }
        
        candidates.push([title,totalSong,timeDiff])
    })
    
    console.log(candidates)
    
    candidates.forEach(song => {
        let [title,totalSong,timeDiff] = song
        if(totalSong.includes(mArr)) {
            answer.push([title,timeDiff,answer.length])
        }
    })
    
    if(answer.length === 0) return '(None)'
    
    answer.sort((a, b) => {
        let [aTitle, aSongLength, aIndex] = a;
        let [bTitle, bSongLength, bIndex] = b;

        if (aSongLength > bSongLength) return -1;
        if (aSongLength < bSongLength) return 1;

        if (aIndex < bIndex) return -1;
        if (aIndex > bIndex) return 1;

        return 0; 
    });
    
    return answer[0][0]
}