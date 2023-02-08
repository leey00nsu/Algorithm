N = int(input())
cnt=0
arr = [2,3,5,7]
for i in range(8,1001):
  isPrime = True
  for j in arr:
    if(i%j==0):
      isPrime=False
      break

  if(isPrime):
    arr.append(i)


inputs=list(map(int,input().split()))

for i in inputs:
  if(i in arr):
    cnt+=1

print(cnt)

