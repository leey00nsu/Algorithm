/*
ICN 공항에서 출발하는 여행 경로를 짠다.
모든 공항을 방문해야 한다.
*/

function solution(tickets) {
    const candidates = []
    const routeLength = tickets.length + 1
    
    tickets.sort()

    function dfs(current,leftTickets) {
        if(current.length === routeLength) {
            return candidates.push(current)
        } 
        
        const lastAirport = current.at(-1)
        
        leftTickets.forEach((ticket,idx) => {
            const [from,to] = ticket
            if(from === lastAirport) {
                dfs([...current,to],[...leftTickets.slice(0,idx),...leftTickets.slice(idx+1)])
            }
        })
    }
    
    dfs(['ICN'],tickets)
    
    
    return candidates[0];
}