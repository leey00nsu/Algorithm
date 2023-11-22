// 자연수로 이루어진 원형 수열의 연속하는 부분 수열의 합을 구해라.
// 투 포인터 알고리즘
// 원형 수열이므로 배열이 이어질 수 있다.
// 

function solution(elements) {
    let result = []
    let doubleArr = [...elements,...elements]
    let maxSum = elements.reduce((prev=0,cur)=> prev+=cur)
    
    // 길이가 1
    for(let i=0;i<elements.length;i++) {
        result.push(elements[i])
    }
    
    // 길이가 최대
    result.push(maxSum)
    
    
    for(let i=1;i<elements.length;i++) {
        let startIndex = 0
        let endIndex = i
        let sum = doubleArr.slice(0,i+1).reduce((prev=0,cur)=>prev+=cur)
        result.push(sum)
        
        while(endIndex < doubleArr.length-1) {
            sum -= doubleArr[startIndex]
            startIndex += 1
            endIndex += 1
            sum += doubleArr[endIndex]
            result.push(sum)
        }
        
    }
    
    
    return new Set(result).size;
}