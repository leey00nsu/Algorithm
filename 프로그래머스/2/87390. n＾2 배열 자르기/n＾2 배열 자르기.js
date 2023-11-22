// n, left, right가 주어진다.
// n행 n열의 2차원 배열을 만든다.
// n에 대하여 1행 1열부터 n행 n열까지의 모든 빈 칸을 숫자 n으로 채운다.
// 행을 모두 잘라내어 이어붙인 새로운 1차원 배열을 만든다.
// 새로운 배열을 arr이라고 할 때 , arr[left],arr[left+1], ... , arr[right] 만 남기고 나머지를 지운다.

function solution(n, left, right) {
    let arr = []

    for (let i = left; i <= right; i++) {
        let rows = Math.floor(i / n);
        let columns = i % n;
        
        if(rows>= columns) {
            arr.push(rows+1)
        } else {
            arr.push(rows+(columns-rows)+1)
        }
        
    }

    return arr;
}