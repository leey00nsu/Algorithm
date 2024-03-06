/*
(0,0) 위치에 점수가 1인 블록을 놓는다.
다음 블록은, 마지막 블록의 상하좌우 중 한 곳에 놓는다.
i번째 놓는 블록의 점수는 Si 이다.
만약 이미 블록이 존재하면, 해당 위치에 블록이 존재하지 않을 때까지 최근 블록들을 순서대로 제거한 후 놓는다.

남아있는 블록의 점수의 합을 구한다.
*/

// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	const input=[]
	
	const weight = {
		'U' : [0,-1],
		'D' : [0,1],
		'L' : [-1,0],
		'R' : [1,0],
	}
	
	for await (const line of rl) {
		input.push(line)
	}
	
	const N = Number(input.shift())
	const D = input.shift().split('')
	const S = input.shift().split(' ').map(Number)
	const output = [[0,0,1]]
	let position = [0,0]
	
	for(let i=0;i<N;i++) {
		const currentDirection = D[i]
		const currentWeight = weight[currentDirection]
		const currentPoint = S[i]

		const currentPosition = position.map((p,idx) => p+currentWeight[idx])
		
		while(true) {
			const isDuplicated = output.filter(el => {
				const [x,y,point] = el
				if(x === currentPosition[0] && y === currentPosition[1]) return el
			}).length > 0
			
			if(isDuplicated) output.pop()
			if(!isDuplicated) break
		}
		
		output.push([currentPosition[0],currentPosition[1],currentPoint])
		position = currentPosition
	}
	
	const result = output.reduce((acc,cur) => {
		const [x,y,point] = cur
		return point+acc
	},0)
	
	console.log(result)
	
	process.exit();
})();
