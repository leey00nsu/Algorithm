// 트럭이 일차선 다리를 정해진 순서로 건넌다.
// 다리에는 트럭이 최대 bridge_length 대 만큼 올라갈 수 있다.
// 다리는 최대 weight 까지의 무게를 견딜 수 있다.
// 트럭은 1초에 1 length 만큼 전진한다.
// 트럭이 순서대로 건널 수 있는 최소 초를 구해라.


// [0,0]
// [0,7]  
// [7,0] 
// [0,4] 
// [4,5] 
// [5,0] 
// [0,6] 
// [6,0] 
// [0,0] 

// [0]
// [10] 1s
// [0] 100s

// [0]
// [10] 1s
// [10,10] 1s
// [10,10,10] 1s
// [10,10,10,10] 1s 
// [10,10,10,10,10] 1s
// [10,10,10,10,10,10] 1s
// [10,10,10,10,10,10,10] 1s
// [10,10,10,10,10,10,10,10] 1s
// [10,10,10,10,10,10,10,10,10] 1s
// [10,10,10,10,10,10,10,10,10,10] 1s
// [0] 100s

function solution(bridge_length, weight, truck_weights) {
  let truckQueue = [...truck_weights];
  let bridge = [];
  let currentWeight = 0;
  let currentLength = 0;
  let tickCount = 0;

  for (let i = 0; i < bridge_length; i++) {
    bridge.push(0);
  }

  while (truckQueue.length > 0) {
    const shiftedTruck = bridge.shift();
    if (shiftedTruck !== 0) {
      currentWeight -= shiftedTruck;
      currentLength -= 1;
    }

    if (
      currentWeight + truckQueue[0] <= weight &&
      currentLength < bridge_length
    ) {
      const currentTruck = truckQueue.shift();
      currentWeight += currentTruck;
      currentLength += 1;
      bridge.push(currentTruck);
    } else {
      bridge.push(0);
    }

    tickCount += 1;
  }
  tickCount += bridge_length;

  return tickCount;
}