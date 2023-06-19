function getCount(word) {
  const alpabets = ["A", "E", "I", "O", "U"];
  const words = [];

  function generateWord(currentWord, currentLength) {
    if (currentLength > 5) {
      return;
    }

    if (currentLength > 0) {
      if (!words.includes(currentWord)) words.push(currentWord);
    }

    for (let i = 0; i < alpabets.length; i++) {
      generateWord(currentWord + alpabets[i], currentLength + 1);
    }
  }

  for (let i = 0; i < alpabets.length; i++) {
    generateWord(alpabets[i], 1);
  }

  return words.indexOf(word) + 1;
}


function solution(word) {
    var answer = getCount(word)
    return answer;
}