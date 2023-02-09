K = int(input())
numbers=[]
cnt=0

for i in range(K):
  n = int(input())
  if(n==0):
    cnt -= numbers.pop()
  else:
    numbers.append(n)
    cnt+=n

print(cnt)

