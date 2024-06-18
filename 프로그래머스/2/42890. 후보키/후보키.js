/*
관계 데이터베이스에서 릴레이션(Relation)의 튜플(Tuple)을 유일하게 식별할 수 있는 속성(Attribute) 또는 속성의 집합 중, 다음 두 성질을 만족하는 것을 후보 키(Candidate Key)라고 한다.
    유일성(uniqueness) : 릴레이션에 있는 모든 튜플에 대해 유일하게 식별되어야 한다.
    최소성(minimality) : 유일성을 가진 키를 구성하는 속성(Attribute) 중 하나라도 제외하는 경우 유일성이 깨지는 것을 의미한다. 즉, 릴레     이션의 모든 튜플을 유일하게 식별하는 데 꼭 필요한 속성들로만 구성되어야 한다.
    
모든 튜플이 유일한 값을 가지고 있는 컬럼은 후보키가 된다.
후보 키가 아닌 값을 조합하면 후보키가 된다.
*/

function getCombination(arr,n) {
    const result = []
    
    if(n === 1) {
        return arr.map(el => [el])
    }
    
    arr.forEach((current,idx) => {
        const rest = arr.slice(idx+1)
        const combinations = getCombination(rest,n-1)
        const attached = combinations.map(el => [current,...el])
        result.push(...attached)
    })
    
    return result
}

function solution(relation) {
    const tupleLength = relation.length
    const columnLength = relation[0].length
    const candidateKey = []
    const restKey = []
    const relationMap = {}
    
    for(let i=0;i<columnLength;i++) {
        relationMap[i] = []
    }
    
    relation.forEach(tuple => {
        tuple.forEach((el,idx) => {
            relationMap[idx].push(el)
        })
    })
    
    for(let i=0;i<columnLength;i++) {
        const tuples = relationMap[i]
        const tuplesSet = new Set(tuples)
        
        const isUnique = tuples.length === tuplesSet.size
        
        if(isUnique) {
            candidateKey.push([i])
        } else {
            restKey.push(i)
        }
    }
    
    const restKeyCombinations = []
    
    for(let i=2;i<=restKey.length;i++) {
        const combinations = getCombination(restKey,i)
        restKeyCombinations.push(...combinations)
    }
    
    restKeyCombinations.forEach(combination => {
        let tuples = Array(tupleLength).fill('')
        
        for(let i=0;i<combination.length;i++) {
            for(let j=0;j<tupleLength;j++) {
                tuples[j] = tuples[j] + relationMap[combination[i]][j]
                
                if(i !== combination.length - 1) {
                    tuples[j] += ','
                }
            }   
        }
        
        const tuplesSet = new Set(tuples)
        
        const isUnique = tuples.length === tuplesSet.size
        const isMinial = candidateKey.every(cK => {
            let matches = 0
            cK.forEach(el => {
                if(combination.includes(el)) {
                    matches += 1
                }
            })
            
            if(matches === cK.length) return false
            
            return true
        })
        
        if(isUnique && isMinial) {
            candidateKey.push(combination)
        } 
    })
    
    
    
    console.log(candidateKey)
    
    return candidateKey.length
}