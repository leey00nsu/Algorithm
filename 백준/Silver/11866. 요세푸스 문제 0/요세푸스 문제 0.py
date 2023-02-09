N,K = map(int,input().split())

cnt = 0
start=0
arr = [True] * (N)
yosepus= []

while(True):
  if(len(yosepus)==N):
    break

  for i in range(start,len(arr)+start):
    i = i%N
    if(arr[i] == True):
      cnt+=1
    if(cnt==K):
      yosepus.append(i+1)
      arr[i]= False
      start=i+1
      cnt = 0
      break;

print('<',end="")
print(str(yosepus)[1:-1],end="")
print('>')
