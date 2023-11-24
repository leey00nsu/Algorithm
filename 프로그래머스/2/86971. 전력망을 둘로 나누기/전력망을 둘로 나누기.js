// n개의 송전탑이 트리로 연결되어 있다.
// 이 트리를 끊어 송전탑의 개수를 비슷하게 맞추려고 한다.
// 한 쪽의 송전탑의 개수를 세면 나머지는 n-송전탑 개수로 알 수 있다.



function solution(n, wires) {
    let candidates = []
    let answer = Infinity;

    for(let i=0;i<wires.length;i++) {
        candidates.push([...wires.slice(0,i),...wires.slice(i+1)])
    }
    
    function dfs(i,map,visited) {
        if(visited[i]) return 0
        
        let cnt = 1
        let neighbors = map[i] ?? []
        
        visited[i] = true
        
        for(let i=0;i<neighbors.length;i++) {
            cnt += dfs(neighbors[i],map,visited)
        }
        
        return cnt
    }
    
    while(candidates.length > 0) {
        const candidate = candidates.pop()
       
        const visited = {}
        const map = {}
        
        for(let i=0;i<candidate.length;i++) {
            const [from,to] = candidate[i]
            map[from] = map[from] ? [...map[from],to] : [to]
            map[to] = map[to] ? [...map[to],from] : [from]
        }
        
        
        const leftConnected = dfs(1,map,{})
        const rightConnected = n - leftConnected
        const diff = Math.abs(leftConnected-rightConnected)
    
        
        answer = answer > diff ? diff : answer
        

    }
    
    
    
    return answer;
}