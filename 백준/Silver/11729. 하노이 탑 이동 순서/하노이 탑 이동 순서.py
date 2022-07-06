global cnt
cnt=0

arr=[]

def hanoi(n,start,end,sub):
  global cnt
  if (n==1):
    cnt+=1
    arr.append(str(start)+" "+str(end))
    return
  hanoi(n-1,start,sub,end)
  arr.append(str(start)+" "+str(end))
  cnt+=1
  hanoi(n-1,sub,end,start)

n = int(input())

hanoi(n,1,3,2)
print(cnt)
for i in arr:
  print(i)