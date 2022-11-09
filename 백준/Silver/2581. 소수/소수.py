import sys
m = int(input())
n = int(input())
min_v = 10000
sum_v = 0


for i in range(m,n+1,1):
  cnt = 0
  for j in range(1,i,1):
    if (i%j == 0):
      cnt += 1

  if(cnt == 1):
    sum_v += i
    if(min_v>i):
      min_v=i

if(sum_v !=0):
  print(sum_v)
  print(min_v)
else:
  print(-1)