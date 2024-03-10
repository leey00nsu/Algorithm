/*
압축하고자 하는 특정 영역 S가 존재한다.
S 내부의 모든 수가 같은 값이면 S를 해당 수 하나로 압축시킨다.
그렇지 않다면, S를 4개의 균일한 정사각형으로 쪼갠 뒤, 각 정사각형 영역으로부터 압축을 시도한다.

최종적으로 0과 1의 개수를 반환한다.
*/



function solution(arr) {
    var answer = [];
    let zero = 0
    let one = 0
    
    function splitArea(arr) {
        const length = Math.sqrt(arr.length)
        const center = length/2
        
        if(arr.every(el => el === 0)) {
            zero += 1
            return
        }
        if(arr.every(el => el === 1)) {
            one += 1
            return
        }
        if(arr.length === 4) {
            zero += arr.filter(el => el === 0).length
            one += arr.filter(el => el === 1).length
            return
        }
        
        const leftTop = []
        const rightTop = []
        const leftBottom = []
        const rightBottom = []
        
        for(let i=0;i<arr.length;i++) {
            const rows = Math.floor(i/length)
            const columns = i%length
            
            if(rows < center && columns < center) {
                leftTop.push(arr[i])
            }
            if(rows < center && columns >= center) {
                rightTop.push(arr[i])
            }
            if(rows >= center && columns < center) {
                leftBottom.push(arr[i])
            }
            if(rows >= center && columns >= center) {
                rightBottom.push(arr[i])
            }
        }
        
        const allAreas = [leftTop,rightTop,leftBottom,rightBottom]

        allAreas.forEach(section => {
            if(section.every(el => el === 0)) {
                zero += 1
            }
            else if(section.every(el => el === 1)) {
                one += 1
            } else {
                splitArea(section)
            }
        })

    }
    
    splitArea(arr.flat());
    
    return [zero,one]
}