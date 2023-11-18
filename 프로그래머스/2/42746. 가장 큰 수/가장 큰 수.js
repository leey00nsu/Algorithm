// 정수 배열이 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수
// 큰 수가 되려면 , 수의 가장 앞 부분이 큰 순서대로 붙여야 한다.
// 즉 배열을 수의 첫번째 수를 기준으로 내림차순으로 정렬한 후 붙인다.
// 3,31,32,34 -> 3433231
// 342 , 3424 , 3 -> 34244233 3423342
// 3 342 3423 3342
// 311 3 3113 3311
// 97,979 -> 97979 97997
// 9797 979 9799797 9797979
function compareNumber(a,b) {
    if(a+b > b+a) return 1
    if(a+b === b+a) return 0
    if(a+b < b+a) return -1
}

function solution(numbers) {
    if(numbers.filter(number => number === 0).length === numbers.length) return '0'
    let sortedNumbers = numbers.map(String).sort().sort((a,b) => {
        if(a[0]>b[0]) return 1
        if(a[0]===b[0]) return compareNumber(a,b)
        if(a[0]<b[0]) return -1
    }).reverse()

    
    return sortedNumbers.join(',').replaceAll(',','') ;
}