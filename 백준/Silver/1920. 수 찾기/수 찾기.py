N = int(input())

x = list(map(int,input().split()))
x.sort()

M = int(input())

y = list(map(int,input().split()))

def binary_search(target,left,right):
  if(left>right):
    return 0
  
  mid = (left+right) // 2

  if (x[mid] == target):
    return 1
  elif (x[mid] > target):
    return binary_search(target,left,mid-1)
  else:
    return binary_search(target,mid+1,right)
  


for i in y:
  print(binary_search(i,0,len(x)-1))



