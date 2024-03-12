/*
1. 가입자를 최대한 늘린다 -> 가격을 최대한 넘긴다.
2. 판매액을 최대로 늘린다 -> 같은 가입자 수를 유지하면서 
*/

// 중복순열
function getPermutation(arr,n) {
    const result = []
    if(n === 1) {
        return arr.map(el => [el])
    }
    
    arr.forEach(el => {
        const permutations = getPermutation(arr,n-1)
        const attached = permutations.map(p => [el,...p])
        result.push(...attached)
    })
    
    return result
}

function solution(users, emoticons) {
    const ratios = [10,20,30,40]
    const result = []
    
    const ratioCandidates = getPermutation(ratios,emoticons.length)

    
    ratioCandidates.forEach(candidate => {
        let plusUser = 0
        let totalSales = 0
        
        users.forEach(user => {
            let sales = 0
            const [userRatio,threshold] = user
            
            emoticons.forEach((emoticon,idx) => {
                if(candidate[idx] >= userRatio) {
                    sales += emoticon * (100 - candidate[idx]) * 0.01
                }
            })
                               
            if(sales >= threshold) {
                plusUser +=1
            } else {
                totalSales += sales
            }              
        })
        
        result.push([plusUser,totalSales])
    })
    
    
    result.sort((a,b) => {
        const [aPlusUser,aTotalSales] = a
        const [bPlusUser,bTotalSales] = b
        
        if(aPlusUser>bPlusUser) return 1
        if(aPlusUser===bPlusUser) return aTotalSales > bTotalSales ? 1:-1
        if(aPlusUser<bPlusUser) return -1
    })

    
    return result.at(-1);
}