/*
완호가 관리하는 어떤 데이터베이스의 한 테이블은 모두 정수 타입인 컬럼들로 이루어져 있습니다.
첫 번째 컬럼은 기본키로서 모든 튜플에 대해 그 값이 중복되지 않도록 보장됩니다
    해시 함수는 col, row_begin, row_end을 입력으로 받습니다.
    테이블의 튜플을 col번째 컬럼의 값을 기준으로 오름차순 정렬을 하되, 만약 그 값이 동일하면 기본키인 첫 번째 컬럼의 값을 기준으로 내림차순 정렬합니다.
    정렬된 데이터에서 S_i를 i 번째 행의 튜플에 대해 각 컬럼의 값을 i 로 나눈 나머지들의 합으로 정의합니다.
    row_begin ≤ i ≤ row_end 인 모든 S_i를 누적하여 bitwise XOR 한 값을 해시 값으로서 반환합니다.
*/

function solution(data, col, row_begin, row_end) {
    const sortedTuple = data.sort((a,b) => a[col-1] - b[col-1] || b[0] - a[0])
    
    const sList = []
    
    for(let i=row_begin;i<=row_end;i++) {
        const tuple = sortedTuple[i-1]
        let s = 0
        
        tuple.forEach(t => {
            s += t % i
        })
        
        sList.push(s)
    }
    
    let answer = sList[0]
    
    for(let i=1;i<sList.length;i++) {
        answer = answer ^ sList[i]
    }
    
    return answer;
}