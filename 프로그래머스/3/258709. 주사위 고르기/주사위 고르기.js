/*
A와 B가 n개의 주사위를 가지고 승부를 합니다
각 주사위는 1 ~ n의 번호를 가지고 있으며, 주사위에 쓰인 수의 구성은 모두 다릅니다.
A가 먼저 n / 2개의 주사위를 가져가면 B가 남은 n / 2개의 주사위를 가져갑니다
각각 가져간 주사위를 모두 굴린 뒤, 나온 수들을 모두 합해 점수를 계산합니다
수가 더 큰 쪽이 승리하며, 점수가 같다면 무승부입니다.



*/

// lower bound
function binarySearch(arr,target) {
    let low = 0
    let high = arr.length - 1
    
    while(low <= high) {
        let mid = Math.floor((low+high)/2)
        
        if(arr[mid] < target) {
            low = mid + 1
        }
        else {
            high = mid - 1
        }
    }
    
    return low
}

function getCombination(arr,n) {
    const result = []

    if(n === 1) {
        return arr.map(el => [el])
    }
    
    arr.forEach((current,idx) => {
        const rest = arr.slice(idx+1)
        const candidates = getCombination(rest,n-1)
        const combinations = candidates.map(el => [current, ...el])
        result.push(...combinations)
    })
    
    return result
}

function getSums(candidates,dice) {
    const sums = [];
    
    function calSums(count, sum) {
        if (count === candidates.length) {
            sums.push(sum);
            return;
        }
            
        for (let i=0; i<6; i++) {
            calSums(count + 1, sum + dice[candidates[count] - 1][i]);
        }
    }
    
    calSums(0,0)
        
    return sums.sort((a,b) => a-b);
}

function solution(dice) {
    const n = dice.length
    const diceArr = []
    let maxWin = 0
    let maxDices = []
    
    for(let i=1;i<=n;i++) {
        diceArr.push(i)
    }

    
    // 주사위를 n/2 만큼 뽑는 조합 계산
    const aDiceCandidates = getCombination(diceArr,n/2)
    const bDiceCandidates = aDiceCandidates.map(aDC => {
        return diceArr.filter(d => !aDC.includes(d))
    })
    
    const candidatesLength = aDiceCandidates.length
    
    for(let i=0;i<candidatesLength;i++) {
        const aDiceSum = getSums(aDiceCandidates[i],dice)
        const bDiceSum = getSums(bDiceCandidates[i],dice)
        const sumLength = aDiceSum.length
        
        
        let idx = 0
        let win = 0
        
        for(let j=0; j<sumLength;j++) {
            win += binarySearch(bDiceSum,aDiceSum[j])
        }
        
        if(win > maxWin) {
            maxWin = win
            maxDices = aDiceCandidates[i]
        }
            
    }
    

    return maxDices
}