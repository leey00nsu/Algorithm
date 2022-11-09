import sys
max_v=0
max_x=0
max_y=0

for i in range(9):
  temp = list(map(int,sys.stdin.readline().split()))
  for j in temp:
    if(j>max_v):
      max_x=i
      max_y=temp.index(j)
      max_v=j


print(max_v)
print(max_x+1,max_y+1)
