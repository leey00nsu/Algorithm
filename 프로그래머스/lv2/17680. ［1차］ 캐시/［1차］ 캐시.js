function getRuntime(cacheSize, cities) {
  let cache = [];
  let runtime = 0;

  if (cacheSize === 0) {
    return cities.length * 5;
  }

  for (let i = 0; i < cities.length; i++) {
    let lower_city = cities[i].toString().toLowerCase();

    if (cache.includes(lower_city)) {
      let c_index = cache.indexOf(lower_city);
      cache = cache.filter((c, index) => index !== c_index);
      cache.push(lower_city);
      runtime += 1;
    } else {
      runtime += 5;
      if (cache.length < cacheSize) {
        cache.push(lower_city);
      } else {
        cache.shift();
        cache.push(lower_city);
      }
    }
  }

  return runtime;
}

function solution(cacheSize, cities) {
    var answer = getRuntime(cacheSize, cities);
    return answer;
}