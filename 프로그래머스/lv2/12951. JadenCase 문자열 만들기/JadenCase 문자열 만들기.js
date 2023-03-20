function toJadenCase(s) {
    let new_s = ''
    for (const i in s) {
      if(i==0) {
        new_s += s[i].toUpperCase()
      }
      else {
        new_s +=s[i].toLowerCase()
      }
    }
    return new_s
}

function solution(s) {
    let answer = '';
    let s_arr = s.split(' ')
    
    for (const i in s_arr) {
        answer+= toJadenCase(s_arr[i])
        if(i!= s_arr.length -1) {
            answer+= ' '
        }
    }
    
    return answer;
}