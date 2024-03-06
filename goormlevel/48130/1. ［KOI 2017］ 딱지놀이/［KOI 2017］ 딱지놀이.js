/*
A,B가 딱지놀이를 한다.
딱지에는 별,동그라미,네모,세모 네 가지 모양중 하나 이상의 모양이 존재한다.
딱지의 우위는 다음과 같다.
- 별의 개수
- 동그라미의 개수
- 네모의 개수
- 세모의 개수
- 모두 같다면 무승부
*/


// Run by Node.js
const readline = require('readline');



(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	const input = []
	const output = []
	
	for await (const line of rl) {
		input.push(line)
	}
	
	const N = Number(input.shift())
	
	for(let i=0;i<N;i++) {
		const A = input.shift().split(' ').map(Number)
		const B = input.shift().split(' ').map(Number)
		const AShapeCount = A.shift()
		const BShapeCount = B.shift()
		const AShapes = [...A]
		const BShapes = [...B]
		
		const AStarLength = AShapes.filter(s => s===4).length
		const BStarLength = BShapes.filter(s => s===4).length
		const ACircleLength = AShapes.filter(s => s===3).length
		const BCircleLength = BShapes.filter(s => s===3).length
		const ASquareLength = AShapes.filter(s => s===2).length
		const BSquareLength = BShapes.filter(s => s===2).length
		const ATriangleLength = AShapes.filter(s => s===1).length
		const BTriangleLength = BShapes.filter(s => s===1).length
		
		const isEqualStar = AStarLength === BStarLength
		const isEqualCircle = ACircleLength === BCircleLength
		const isEqualSquare = ASquareLength === BSquareLength
		const isEqualTriangle = ATriangleLength === BTriangleLength
		
		if(isEqualStar && isEqualCircle && isEqualSquare && isEqualTriangle) output.push('D')
		
		if(isEqualStar && isEqualCircle && isEqualSquare) {
			if(ATriangleLength>BTriangleLength) output.push('A')
			if(ATriangleLength<BTriangleLength) output.push('B')
		}
		
		if(isEqualStar && isEqualCircle ) {
			if(ASquareLength>BSquareLength) output.push('A')
			if(ASquareLength<BSquareLength) output.push('B')
		}
		
		if(isEqualStar) {
			if(ACircleLength>BCircleLength) output.push('A')
			if(ACircleLength<BCircleLength) output.push('B')
		}
		
		if(AStarLength>BStarLength) output.push('A')
		if(AStarLength<BStarLength) output.push('B')
	}
	
	for(const o of output) {
		console.log(o)
	}
	
	console.log('')
	
	
	process.exit();
})();
