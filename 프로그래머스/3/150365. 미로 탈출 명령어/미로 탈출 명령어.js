/*
미로의 (x, y)에서 출발해 (r, c)로 이동해서 탈출해야 합니다.
    격자의 바깥으로는 나갈 수 없습니다.
    (x, y)에서 (r, c)까지 이동하는 거리가 총 k여야 합니다. 
    이때, (x, y)와 (r, c)격자를 포함해, 같은 격자를 두 번 이상 방문해도 됩니다.
    미로에서 탈출한 경로를 문자열로 나타냈을 때, 문자열이 사전 순으로 가장 빠른 경로로 탈출해야 합니다.
    
d,l,r,u 순서

우선 S -> E 까지의 최단거리로 이동 후
*/

function getDistance(x,y,r,c) {
    return Math.abs(x-r) + Math.abs(y-c)
}

function solution(n, m, x, y, r, c, k) {
    const maze = Array(n).fill(0).map(el => Array(m).fill(0))
    const rX = x - 1
    const rY = y - 1
    const rR = r - 1
    const rC = c - 1
    const stack = [[rX,rY,'']]
    const distance = [[-1,0,'u'],[0,1,'r'],[0,-1,'l'],[1,0,'d']]
    
    if(k - getDistance(x,y,r,c) < 0 || (k - getDistance(x,y,r,c)) % 2 === 1) return 'impossible'
    
    while(stack.length > 0) {
        const [cR,cC,cH] = stack.pop()
        
        if(cR === rR && cC === rC && cH.length === k) {
            return cH
        }
        
        
        for(const d of distance) {
            const [dR,dC,dH] = d
            
            const nextR = cR+dR
            const nextC = cC+dC
            const nextH = cH+dH
            
            if(nextR < 0 || nextR >= n || nextC < 0 || nextC >= m) continue
            if(k < nextH.length + getDistance(nextR,nextC,rR,rC)) continue
            
            stack.push([nextR,nextC,nextH])
        }
    }
    

    return 
}