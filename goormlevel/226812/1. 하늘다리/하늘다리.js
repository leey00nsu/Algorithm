const readline = require('readline');
(async () => {
    let rl = readline.createInterface({ input: process.stdin });
    
    const inputs = []
    
    for await (const line of rl) {
        inputs.push(line.trim())
    }
    
    const n = Number(inputs.shift())
    
    const heights = inputs.shift().split(' ').map(Number)
    
    const stack = []
    let count = 0
    
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] <= heights[i]) {
            if (heights[stack[stack.length - 1]] === heights[i]) {
                count++
            }
            stack.pop()
        }
        stack.push(i)
    }
    
    console.log(count)
    
    process.exit();
})();