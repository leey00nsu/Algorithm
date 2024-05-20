/*
숫자 카드 더미에는 카드가 총 100장 있으며, 각 카드에는 1부터 100까지 숫자가 하나씩 적혀있습니다
2 이상 100 이하의 자연수를 하나 정해 그 수보다 작거나 같은 숫자 카드들을 준비하고, 준비한 카드의 수만큼 작은 상자를 준비하면 게임을 시작할 수 있으며 게임 방법은 다음과 같습니다.

준비된 상자에 카드를 한 장씩 넣고, 상자를 무작위로 섞어 일렬로 나열합니다.
상자가 일렬로 나열되면 상자가 나열된 순서에 따라 1번부터 순차적으로 증가하는 번호를 붙입니다.
그 다음 임의의 상자를 하나 선택하여 선택한 상자 안의 숫자 카드를 확인합니다.
다음으로 확인한 카드에 적힌 번호에 해당하는 상자를 열어 안에 담긴 카드에 적힌 숫자를 확인합니다.
마찬가지로 숫자에 해당하는 번호를 가진 상자를 계속해서 열어가며, 열어야 하는 상자가 이미 열려있을 때까지 반복합니다.

이렇게 연 상자들은 1번 상자 그룹입니다. 
이제 1번 상자 그룹을 다른 상자들과 섞이지 않도록 따로 둡니다. 
만약 1번 상자 그룹을 제외하고 남는 상자가 없으면 그대로 게임이 종료되며, 이때 획득하는 점수는 0점입니다

그렇지 않다면 남은 상자 중 다시 임의의 상자 하나를 골라 같은 방식으로 이미 열려있는 상자를 만날 때까지 상자를 엽니다. 
이렇게 연 상자들은 2번 상자 그룹입니다.

1번 상자 그룹에 속한 상자의 수와 2번 상자 그룹에 속한 상자의 수를 곱한 값이 게임의 점수입니다.

범희가 이 게임에서 얻을 수 있는 최고 점수를 구해서 return 하도록 solution 함수를 완성해주세요.

*/

function playCard(start,cards,visited) {
        let position = start
        let point = 0
        const currentCards = [...cards]
        const group = []
        
        
        while(true) {
            if(visited[position]) break
            
            visited[position] = true
            
            const next = currentCards[position]
            
            group.push(next)
            
            position = next
        }
        
        return group.length
    }

function solution(cards) {
    let answer = 0
    let paddedCards = [0,...cards]
    
    for(let i=1;i<=cards.length;i++) {
        const visited = Array(cards.length).fill(false)
        
        const firstGroup = playCard(i,paddedCards,visited)
        
        for(let j=1;j<=cards.length;j++) {
            const secondGroup = playCard(j,paddedCards,visited)
            
            answer = Math.max(answer,firstGroup*secondGroup)
        }
        
        
    }
    
    
    
    return answer;
}