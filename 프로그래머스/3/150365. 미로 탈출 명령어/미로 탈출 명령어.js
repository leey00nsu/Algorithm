/*
미로의 (x, y)에서 출발해 (r, c)로 이동해서 탈출해야 합니다.
    격자의 바깥으로는 나갈 수 없습니다.
    (x, y)에서 (r, c)까지 이동하는 거리가 총 k여야 합니다. 
    이때, (x, y)와 (r, c)격자를 포함해, 같은 격자를 두 번 이상 방문해도 됩니다.
    미로에서 탈출한 경로를 문자열로 나타냈을 때, 문자열이 사전 순으로 가장 빠른 경로로 탈출해야 합니다.
    
d,l,r,u 순서로 이동한다

*/

function getDistance(x,y,r,c) {
    return Math.abs(x-r) + Math.abs(y-c)
}   

function solution(n, m, x, y, r, c, k) {
    let answer = ''
    let move = 0
    
    // 탈출할 수 없는 경우
    if(k - getDistance(x,y,r,c) < 0 || (k - getDistance(x,y,r,c)) % 2 === 1) return 'impossible'
    
    
    // 남는 k를 사용하여 최대한 d,l 로 이동
    while(x < n && (k - move) > getDistance(x,y,r,c)) {
        x += 1
        move += 1
        answer += 'd'
    }
    while(y > 1 && (k - move) > getDistance(x,y,r,c)) {
        y -= 1
        move += 1
        answer += 'l'
    }
    
    // 그래도 남으면 r,l 순으로 이동
    while((k - move) > getDistance(x,y,r,c)) {
        move += 2
        answer += 'rl'
    }
    
    // 탈출 지점으로 이동
    while(x < r) {
        x += 1
        answer += 'd'
    }
    while(y > c) {
        y -= 1
        answer += 'l'
    }
    while(y < c) {
        y += 1
        answer += 'r'
    }
    while(x > r) {
        x -= 1
        answer += 'u'
    }
    

    return answer
}