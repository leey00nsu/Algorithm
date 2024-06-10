/*
"U X": 현재 선택된 행에서 X칸 위에 있는 행을 선택합니다.
"D X": 현재 선택된 행에서 X칸 아래에 있는 행을 선택합니다.
"C" : 현재 선택된 행을 삭제한 후, 바로 아래 행을 선택합니다. 단, 삭제된 행이 가장 마지막 행인 경우 바로 윗 행을 선택합니다.
"Z" : 가장 최근에 삭제된 행을 원래대로 복구합니다. 단, 현재 선택된 행은 바뀌지 않습니다.

모든 명령어를 수행한 후 표의 상태와 처음 주어진 표의 상태를 비교하여 삭제되지 않은 행은 O, 삭제된 행은 X로 표시하여 문자열 형태로 return 하도록 solution 함수를 완성해주세요.


1,2,X,X,[5],6,X,8
1,2,[5],6,8
*/


function solution(n, k, cmd) {
    const maxRow = n - 1
    const minRow = 0
    
    const table = []
    const history = []

    let currentRow = k
    
    for(let i=0;i<n;i++) {
        if(i === 0) {
            table.push([null,i,i+1])
        } else if(i === n-1) {
            table.push([i-1,i,null])
        } else {
            table.push([i-1,i,i+1])
        }
    }
    
    cmd.forEach(c => {
        const [command,number] = c.split(' ')
        
        if(command === 'D') {
            let i = 0 
            
            while(i < Number(number)) {
                let [prev,value,next] = table[currentRow]
                
                if(next === null) break
                
                currentRow = next
                i += 1
            }
        }
        if(command === 'U') {
            let i = 0 
            
            
            while(i < Number(number)) {
                let [prev,value,next] = table[currentRow]
                
                if(prev === null) break
                
                currentRow = prev
                i += 1
            }
        }
        if(command === 'C') {
            let [prev,value,next] = table[currentRow]
            
            history.push([prev,value,next])
            
            if(prev !== null) {
                table[prev][2] = next
            }
            
            if(next !== null) {
                table[next][0] = prev
            } 
            
            if(next !== null) {
                currentRow = next
            } else {
                currentRow = prev
            }
        }
        if(command === 'Z') {
            let [prev,value,next] = history.pop()
            
            if(prev !== null) {
                table[prev][2] = value
            }
            
            if(next !== null) {
                table[next][0] = value
            }
            
            table[value][0] = prev
            table[value][2] = next
        }
    })
    
    const result = Array(n).fill('O')
    
    history.forEach(t => {
        const [prev,value,next] = t
        
        result[value] = 'X'
    })
    
    return result.join('');
}