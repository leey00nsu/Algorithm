function getIndex(citations) {
  let h_index = 0;

  let max = Math.max(...citations);

  for (let i = 1; i < max + 1; i++) {
    let more = citations.filter((citation) => citation >= i);
    let rest = citations.filter((citation) => citation < i);
    let less = rest.filter((citation) => citation <= i);

    if (more.length >= i && rest.length === less.length) {
      h_index = i;
    }
  }

  return h_index;
}

function solution(citations) {
    var answer = getIndex(citations);
    return answer;
}