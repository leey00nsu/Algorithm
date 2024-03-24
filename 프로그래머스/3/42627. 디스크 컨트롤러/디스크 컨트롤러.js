function solution(jobs) {
    jobs.sort((a,b)=> a[0]-b[0]);
    let total = 0;
    let queue = [];
    const length = jobs.length;
    let count = 0
    
    while(jobs.length > 0 || queue.length > 0){
        while(jobs.length > 0 && jobs[0][0] <= count){
            queue.push(jobs.shift());
        }
        if (queue.length > 0){
            queue.sort((a,b)=> a[1]-b[1]);
            const job = queue.shift();
            total += ((count + job[1]) - job[0]);
            count += job[1];
        }
        else{
            count = jobs[0][0];
        }
    }
    
    return Math.floor(total/length);
}