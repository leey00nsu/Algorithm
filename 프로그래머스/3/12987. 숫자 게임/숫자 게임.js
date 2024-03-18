/*
2N 명의 사람들을 N명씩 A,B 두 팀으로 나누어 숫자 게임을 한다.
1.모든 사람이 무작위 자연수를 받는다.
2.각 사람은 딱 한 번 경기를 한다.
3. 각 경기당 A에서 한 사람, B에서 한 사람이 서로의 수를 공개한다.
    - 숫자가 큰 쪽의 팀이 승점 1점을 얻는다.
    - 숫자가 같다면 누구도 승점을 얻지 않는다.

A팀의 순서를 B팀이 알고있을 때, B팀이 얻을 수 있는 가장 높은 점수를 구한다.

가장 많이 이기기 위해서는, 해당 숫자에서 가장 근접한 수로 이겨야한다.

1 3 5 7
2 2 6 8

*/

function solution(A, B) {
    let point = 0
    const leftA = [...A].sort((a,b) => a-b)
    const leftB = [...B].sort((a,b) => a-b)
    
    let aIdx = 0
    let bIdx = 0
    
    while(aIdx <= leftA.length && bIdx <= leftB.length) {
        if(leftA[aIdx] < leftB[bIdx]) {
            aIdx += 1 
            bIdx += 1
            point += 1
        } else {
            bIdx += 1
        }
    }
    
    
    
    
    
    return point;
}