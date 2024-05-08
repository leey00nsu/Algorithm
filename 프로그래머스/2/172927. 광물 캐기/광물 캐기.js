/*
마인은 다이아몬드 곡괭이, 철 곡괭이, 돌 곡괭이를 각각 0개에서 5개까지 가지고 있으며, 곡괭이로 광물을 캘 때는 피로도가 소모됩니다
각 곡괭이는 종류에 상관없이 광물 5개를 캔 후에는 더 이상 사용할 수 없습니다.
마인은 다음과 같은 규칙을 지키면서 최소한의 피로도로 광물을 캐려고 합니다.
    사용할 수 있는 곡괭이중 아무거나 하나를 선택해 광물을 캡니다.
    한 번 사용하기 시작한 곡괭이는 사용할 수 없을 때까지 사용합니다.
    광물은 주어진 순서대로만 캘 수 있습니다.
    광산에 있는 모든 광물을 캐거나, 더 사용할 곡괭이가 없을 때까지 광물을 캡니다.
    
최소한의 피로도로 광물을 캐려고 한다.
다이아 곡괭이는 모든 광물에 대해서 피로도 1
철은 다이아몬드에서만 피로도 5
돌은 다이아몬드에서 25,철은 5의 피로도가 소모된다.

즉, 광물에 다이아몬드,철이 포함되어있다면 다이아몬드,철,돌 곡괭이 순으로 사용해야 피로도가 최소가 된다.
광물이 돌이라면 어떤 곡괭이를 사용해도 상관이 없다.

*/

function solution(picks, minerals) {
    let [dia,iron,stone] = picks
    let mineralArray = []
    let result = 0
    let current = 0
    
    const maxMineral = dia*5+iron*5+stone*5
    
    for(let i=0;i<maxMineral;i+=5) {
        if(i > minerals.length) break
        
        const currentMinerals = minerals.slice(i,i+5)
        
        mineralArray.push(currentMinerals)
    }
    
    console.log(maxMineral)
    console.log(mineralArray)

    
    mineralArray = mineralArray.sort((a,b) => {
        const aDiaCnt = a.filter(m => m === 'diamond').length
        const aIronCnt = a.filter(m => m === 'iron').length
        const aStoneCnt = a.filter(m => m === 'stone').length
        
        const bDiaCnt = b.filter(m => m === 'diamond').length
        const bIronCnt = b.filter(m => m === 'iron').length
        const bStoneCnt = b.filter(m => m === 'stone').length

        
        return bDiaCnt - aDiaCnt || bIronCnt - aIronCnt
    })
    
    
    while(mineralArray.length > 0) {
        if(dia === 0 && iron === 0 && stone === 0) break
        
        const currentMinerals = mineralArray.shift()
        
        const diaCnt = currentMinerals.filter(cm => cm === 'diamond').length
        const ironCnt = currentMinerals.filter(cm => cm === 'iron').length
        const stoneCnt = currentMinerals.filter(cm => cm === 'stone').length
        
        let currentPick
        
         if(dia > 0) {
            currentPick = 'dia'
            dia -= 1
        } else if(iron > 0) {
            currentPick = 'iron'
            iron -= 1
        } else if(stone > 0) {
            currentPick = 'stone'
            stone -= 1
        }
        
        
        if(currentPick === 'dia') {
            result += diaCnt*1 + ironCnt*1 + stoneCnt*1
        } else if(currentPick === 'iron') {
            result += diaCnt*5 + ironCnt*1 + stoneCnt*1
        } else {
            result += diaCnt*25 + ironCnt*5 + stoneCnt*1
        }
        
    }
    
    return result;
}