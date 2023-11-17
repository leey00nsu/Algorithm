function solution(A,B){
    var answer = 0;
    
    let a = [...A];
    let b = [...B];

    
    a.sort(function(a, b)  {
      if(a > b) return 1;
      if(a === b) return 0;
      if(a < b) return -1;
    });
    
    b.sort(function(b, a)  {
      if(a > b) return 1;
      if(a === b) return 0;
      if(a < b) return -1;
    });
    

    for(let i=0;i<a.length;i++){
        answer+= a[i]*b[i]
    }

    return answer;
}