t = int(input())

cnt = 0
result = []

def track(n):
  global cnt
  
  if(n<=0):
    if(n==0):
      cnt+=1
    return

  track(n-1)
  if(n//2 !=0):
    track(n-2)

  if(n//3 !=0):
    track(n-3)

for i in range(t):
  n = int(input())
  track(n)
  result.append(cnt)
  cnt=0

for i in result:
  print(i)