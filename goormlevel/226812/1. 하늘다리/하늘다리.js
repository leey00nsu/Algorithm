// Run by Node.js
const readline = require('readline');
(async () => {
    let rl = readline.createInterface({ input: process.stdin });

    const inputs = []

    for await (const line of rl) {
        inputs.push(line.trim())
    }

    const n = Number(inputs.shift())

    const arr = inputs.shift().split(' ').map(Number)

    const stack = []
    let cnt = 0

    while(arr.length > 0) {
        const current = arr.pop()

        if(stack.length === 0) {
            stack.push(current)
        } else {
            while(stack.at(-1) < current) {
                stack.pop()
            }

            if(stack.at(-1) === current) {
                cnt += 1
            } else {
                stack.push(current)
            }
        }
    }

    console.log(cnt)

    process.exit();
})();