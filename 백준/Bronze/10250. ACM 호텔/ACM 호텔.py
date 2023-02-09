import math

T = int(input())
for i in range(T):
  H,W,N = map(int,input().split())
  Y=0
  if(N%H==0):
    Y=H
  else:
    Y = N%H
  X = math.ceil(N/H)

  if(X>=10):
    print(str(Y)+str(X))
  else:
    print(str(Y)+'0'+str(X))