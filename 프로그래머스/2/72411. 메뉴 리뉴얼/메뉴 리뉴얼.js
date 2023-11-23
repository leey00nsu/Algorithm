// 코스요리 메뉴는 최소 2가지 이상의 단품 메뉴로 구성된다.
// 최소 2명 이상의 손님으로부터 주문된 단품 메뉴 조합에 대해서만 후보에 포함시킨다.

function getCombinations(arr,targetLength) {
    const result = []
    
    if(targetLength === 1) return arr.map(el => [el])
    
    arr.forEach((number,index) => {
        const rest = arr.slice(index+1)
        const combinations = getCombinations(rest,targetLength-1)
        const combined = combinations.map(combination => [number,...combination])
        result.push(...combined)
    })
    
    return result
}

function solution(orders, course) {
    let map = {}
    const result = [];
    
    orders.forEach(order => {
        course.forEach(targetLength => {
            let combinations = []
            combinations = getCombinations(order.split('').sort(),targetLength)
            combinations.forEach(combination => {
              map[combination.join('')] = map[combination.join('')] ? map[combination.join('')]+1 : 1
            })
        })
    })
    
    course.forEach(targetLength => {
        let maxCount = 0
        

        for(let key in map) {
            if(key.length === targetLength) {
                maxCount = maxCount > map[key] ? maxCount : map[key]
            }
        }
        
        if(maxCount !== 1) {
            for(let key in map) {
                if(key.length === targetLength && map[key] === maxCount) {
                    result.push(key)
                }
        }  
        }



    })
    
    
    return result.sort();
}