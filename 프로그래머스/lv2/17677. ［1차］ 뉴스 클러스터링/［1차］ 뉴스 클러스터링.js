function getJaccard(str1, str2) {
  let str1_arr = [...str1.toUpperCase()];
  let str1_subset = [];
  let str1_dupl = {};

  let regExp = /[A-Z]/;

  for (let i = 0; i < str1_arr.length - 1; i++) {
    if (regExp.test(str1_arr[i]) && regExp.test(str1_arr[i + 1])) {
      let added = [str1_arr[i], str1_arr[i + 1]].join("");
      if (!str1_dupl[added]) {
        str1_subset.push(added);
        str1_dupl[added] = 1;
      } else {
        str1_dupl[added] += 1;
        str1_subset.push([added, str1_dupl[added]].join(""));
      }
    }
  }

  let str2_arr = [...str2.toUpperCase()];
  let str2_subset = [];
  let str2_dupl = {};

  for (let i = 0; i < str2_arr.length - 1; i++) {
    if (regExp.test(str2_arr[i]) && regExp.test(str2_arr[i + 1])) {
      let added = [str2_arr[i], str2_arr[i + 1]].join("");
      if (!str2_dupl[added]) {
        str2_subset.push(added);
        str2_dupl[added] = 1;
      } else {
        str2_dupl[added] += 1;
        str2_subset.push([added, str2_dupl[added]].join(""));
      }
    }
  }

  if (str1_subset.length === 0 && str2_subset.length === 0) {
    return 65536;
  }

  let arr_diff = str1_subset.filter((item) => !str2_subset.includes(item));
  let arr_intersection = str1_subset.filter((item) =>
    str2_subset.includes(item)
  );
  let arr_union = str2_subset.concat(...arr_diff);


  let jaccard = Math.floor(
    (arr_intersection.length / arr_union.length) * 65536
  );

  return jaccard;
}

function solution(str1, str2) {
    var answer = getJaccard(str1,str2);
    return answer;
}