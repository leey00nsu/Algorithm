def closest(arr,n):
    min_diff = 99999
    closest= 0
    for i in range(len(arr)):
        temp_diff = abs(n-arr[i])
        if(temp_diff<min_diff):
            min_diff = temp_diff
            closest = arr[i]
        elif(temp_diff==min_diff):
            if(closest>arr[i]):
              min_diff = temp_diff
              closest=arr[i]
            
        
    return closest

def solution(array, n):
    answer = closest(array,n)
    return answer