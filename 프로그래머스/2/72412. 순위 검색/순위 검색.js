/*
* [조건]을 만족하는 사람 중 코딩테스트 점수를 X점 이상 받은 사람은 모두 몇 명인가?
*/

function binarySearch(arr, n) {
    let left = 0;
    let right = arr.length;
    
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
        
      if (arr[mid] >= n) {
          right = mid;
      } else {
          left = mid + 1;
      }
    }
    
    return arr.length - left;
}

function solution(info, query) {
    const result = []
    const users = {}
    
    info.forEach(i => {
        const [language,part,career,food,point] = i.split(' ')
        
        const languageCode = [language,'-']
        const partCode = [part,'-']
        const careerCode = [career,'-']
        const foodCode = [food,'-']
        
        for(let i=0;i<languageCode.length;i++) {
            for(let j=0;j<partCode.length;j++) {
                for(let k=0;k<careerCode.length;k++) {
                    for(let l=0;l<foodCode.length;l++) {
                        const code = `${languageCode[i]}${partCode[j]}${careerCode[k]}${foodCode[l]}`
                        if(users[code]) {
                            users[code].push(Number(point))
                        } else {
                            users[code] = [Number(point)]
                        }
                    }
                }
            }
        }
    })
    
    Object.keys(users).forEach(k => {
        users[k] = users[k].sort((a,b) => a - b)
    })
    
    query.forEach(q => {
        const [language,part,career,food,point] = q.replaceAll('and ','').split(' ')
        
        
        const code = `${language}${part}${career}${food}` 
        
        if(!users[code]) {
            result.push(0)
        } else {
           const candidates = users[code]
        
           const candidatesLength = binarySearch(candidates,Number(point))

           result.push(candidatesLength) 
        }
        
        
    })
    
    
    
    return result;
}