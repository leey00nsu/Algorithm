function getCarpet(brown, yellow) {
  let w, h;
  let heights = [];
  let widths = [];
  for (let i = 1; i < yellow + 1; i++) {
    if (!heights.includes(i) && !widths.includes(i) && yellow % i === 0) {
      heights.push(i);
      widths.push(yellow / i);
    }
  }

  for (let i = 0; i < heights.length; i++) {
    let carpet = 0;
    carpet += 2 * (2 + widths[i]);
    carpet += 2 * heights[i];
    if (carpet === brown) {
      w = widths[i] + 2;
      h = heights[i] + 2;
    }
  }
  return [w, h];
}

function solution(brown, yellow) {
    var answer = getCarpet(brown,yellow);
    return answer;
}