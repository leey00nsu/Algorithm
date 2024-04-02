/*
모든 판매원은 발생하는 이익에서 10%를 추천인에게 배분하고 나머지는 자신이 가집니다
10% 를 계산할 때에는 원 단위에서 절사하며, 10%를 계산한 금액이 1 원 미만인 경우에는 이득을 분배하지 않고 자신이 모두 가집니다

칫솔 한 개 = 100원

추천인 트리가 가장 깊은 사람부터 계산
*/

function solution(enroll, referral, seller, amount) {
    const sellerMap = {}
    const sellMap = {}
    const moneyMap = {}
    
    enroll.forEach(e => {
        sellerMap[e] = ''
        moneyMap[e] = 0
    })
    
    enroll.forEach((e,idx) => {
        if(referral[idx] !== '-') {
            sellerMap[e] = referral[idx]
        }
    })
    
    seller.forEach((s,idx) => {
        const current = s
        let ref = sellerMap[current]
        
        let profit = amount[idx] * 100
        let tip = profit ? parseInt(profit * 0.1) : 0
        
        moneyMap[current] += profit - tip
        
        while(ref && tip) {
            profit = tip
            tip = parseInt(tip * 0.1)
            moneyMap[ref] += profit - tip
            
            ref = sellerMap[ref]
        }
    })
    
    return Object.values(moneyMap);
}