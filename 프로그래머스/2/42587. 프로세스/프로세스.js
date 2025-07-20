function solution(priorities, location) {
    const locations = priorities.map((x,i) => i)
    let order = 0

    while(priorities.length > 0) {
        const maxPriority = Math.max(...priorities)
        const currentPriority = priorities.shift()
        const currentLocation = locations.shift()
        
        if(maxPriority == currentPriority) {
            order += 1
            if(currentLocation == location) return order
        } else {
            priorities.push(currentPriority)
            locations.push(currentLocation)
        }
        
    }
    
    return
}