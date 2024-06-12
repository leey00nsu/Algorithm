/*
카카오 프렌즈를 두 팀으로 나누고, 각 팀이 같은 곳을 다른 순서로 방문하도록 해서 먼저 순회를 마친 팀이 승리하는 것이다.
라이언은 방문할 곳의 2차원 좌표 값을 구하고 각 장소를 이진트리의 노드가 되도록 구성한 후, 순회 방법을 힌트로 주어 각 팀이 스스로 경로를 찾도록 할 계획이다.
    트리를 구성하는 모든 노드의 x, y 좌표 값은 정수이다.
    모든 노드는 서로 다른 x값을 가진다.
    같은 레벨(level)에 있는 노드는 같은 y 좌표를 가진다.
    자식 노드의 y 값은 항상 부모 노드보다 작다.
    임의의 노드 V의 왼쪽 서브 트리(left subtree)에 있는 모든 노드의 x값은 V의 x값보다 작다.
    임의의 노드 V의 오른쪽 서브 트리(right subtree)에 있는 모든 노드의 x값은 V의 x값보다 크다.
    
*/

class Node {
    constructor(x,y,index) {
        this.x = x
        this.y = y
        this.index = index
        this.leftChild = null
        this.rightChild = null
    }
    
    toLeft(x,y,index) {
        if(this.leftChild) {
            this.leftChild.insert(x,y,index) 
        } else {
            this.leftChild = new Node(x,y,index)
        }
    }
    
    toRight(x,y,index) {
        if(this.rightChild) {
            this.rightChild.insert(x,y,index) 
        } else {
            this.rightChild = new Node(x,y,index)
        }
    }
    
    insert(x,y,index) {
        if(this.x > x) {
            this.toLeft(x,y,index)
        } else if(this.x < x) {
            this.toRight(x,y,index)
        }
    }
}


function solution(nodeinfo) {
    const labeledNodeInfo = nodeinfo.map((ni,idx) => {
        return [...ni,idx+1]
    })
    
    labeledNodeInfo.sort((a,b) => b[1] - a[1] || a[0] - b[0])
    
    const rootNode = new Node(labeledNodeInfo[0][0],labeledNodeInfo[0][1],labeledNodeInfo[0][2])
    
    for(let i=1;i<labeledNodeInfo.length;i++) {
        const [x,y,index] = labeledNodeInfo[i]
        
        rootNode.insert(x,y,index)
    }
    
    function preorderTraverse(node,arr) {
        if(node) {
            arr.push(node.index)
            preorderTraverse(node.leftChild,arr)
            preorderTraverse(node.rightChild,arr)
        }
    }
    
    function postorderTraverse(node,arr) {
        if(node) {
            postorderTraverse(node.leftChild,arr)
            postorderTraverse(node.rightChild,arr)
            arr.push(node.index)
        }
    }
    
    const preorderResult = []
    const postorderResult = []
    
    preorderTraverse(rootNode,preorderResult)
    postorderTraverse(rootNode,postorderResult)
    
    return [preorderResult,postorderResult];
}