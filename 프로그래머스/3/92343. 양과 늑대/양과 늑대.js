/*
2진 트리 모양 초원의 각 노드에 늑대와 양이 한 마리씩 놓여 있습니다. 
각 노드를 방문할 때 마다 해당 노드에 있던 양과 늑대가 당신을 따라오게 됩니다. 
늑대는 양을 잡아먹을 기회를 노리고 있으며, 당신이 모은 양의 수보다 늑대의 수가 같거나 더 많아지면 바로 모든 양을 잡아먹어 버립니다. 
당신은 중간에 양이 늑대에게 잡아먹히지 않도록 하면서 최대한 많은 수의 양을 모아서 다시 루트 노드로 돌아오려 합니다.

모든 노드에서 다른 노드로 갔을 때 다음 양을 얻을 수 있는 코스트를 구한다.
    해당 코스트가 작은 순부터 탐사한다.
    만약 다음 양이 없거나, 현재 양의 개수보다 코스트가 같거나 크면 탐사하지 않는다.
*/



function solution(info, edges) {
    const nodes = {}
    const visited = []
    
    info.forEach((i,idx) => {
        nodes[idx] = {
            value : i === 0 ? 'sheep' : 'wolf',
            left : null,
            right : null,
        }
    })
    
    edges.forEach(e => {
        const [parent,child] = e
        
        if(nodes[parent].left) {
            nodes[parent].right = child
        } else {
            nodes[parent].left = child
        }
    })
    
    // info.forEach((i,idx) => {
    //     nodes[idx].cost = getCost(idx)
    //     nodes[idx].promise = getPromise(idx)
    // })
    
    let maxSheep = 0
    
    function dfs(index,sheep,wolf,candidates) {
        const arr = [...candidates]
        const currentNode = nodes[index]
        
        if(currentNode.value === 'sheep') {
            sheep += 1
        } else {
            wolf += 1
        }
        
        if(wolf >= sheep) return
        
        maxSheep = Math.max(maxSheep,sheep)
        
        if(currentNode.left) {
            arr.push(currentNode.left)
        }
        if(currentNode.right) {
            arr.push(currentNode.right)
        }
        
        arr.forEach(c => {
            const candidatesWithoutCurrent = arr.filter(el => el !== c)
            dfs(c,sheep,wolf,candidatesWithoutCurrent)
        }) 
    }
    
    dfs(0,0,0,[])
    
    
    
    return maxSheep;
}