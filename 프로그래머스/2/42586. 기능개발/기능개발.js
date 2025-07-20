function solution(progresses, speeds) {
    const workDays = []
    const deployCounts = []
    
    for(let i=0; i<progresses.length; i++) {
        const currentProgress = progresses[i]
        const currentSpeed = speeds[i]
        
        const workDay = Math.ceil((100 - currentProgress) / currentSpeed)
        
        workDays.push(workDay)
    }
    
    workDays.reverse()
    
    let maxDays = workDays.at(-1)
    let deployCount = 0 
    
    while(workDays.length > 0) {
        const currentDay = workDays.pop()
        
        if(maxDays >= currentDay) {
            deployCount += 1
        } else {
            maxDays = currentDay
            deployCounts.push(deployCount)
            deployCount = 1
        }
    }
    
    deployCounts.push(deployCount)
    
    
    return deployCounts
}