/*
개미가 N 마리 존재한다.
개미 집합의 지름은 집합의 임의의 두 개미 사이의 거리 중 가장 긴 거리를 의미한다.
개미 집합의 지름을 D 이하로 줄이기 위해 개미를 제거하려고 한다.
개미 집합의 지름을 D 이하로 줄이기 위해 제거할 최소한의 개미 수를 구한다.
*/



// Run by Node.js
const readline = require('readline');

const input = []

function solution(ants,D) {
	const sortedAnts = ants.sort((a,b) => a-b)
	let removeCount = ants.length
	
	for(let i=0;i<sortedAnts.length;i++) {
		let left = i
		let right = i
		
		while(right<sortedAnts.length && sortedAnts[right]-sortedAnts[left] <= D) {
			right += 1 
		}
		
		const count = ants.length - (right-left)
		
		removeCount = Math.min(removeCount,count)
	}
	
	
	
	
	return removeCount
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		input.push(line)
	}
	
	const [N,D] = input[0].split(' ').map(Number)
	const ants = input[1].split(' ').map(Number)
	
	const answer = solution(ants,D)
	
	console.log(answer)
	
	process.exit();
})();
