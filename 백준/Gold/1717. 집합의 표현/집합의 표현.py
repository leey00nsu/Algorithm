import sys
sys.setrecursionlimit(10**9) #재귀가 깊어지면 recursion 오류가 발생하는데 제한을 늘려준다
n, m = map(int,[int(x) for x in sys.stdin.readline().split()]) #input으로 받앋을 시 시간초과가 일어나게된다
array=[]

for i in range(n+1):
  array.append(i)

def getParent(a):
  if(array[a]==a):
    return a
  array[a]=getParent(array[a])
  return array[a]

def unionParent(a,b):
  if(a<b): 
    array[b]=a
  else:
    array[a]=b

def findParent(a,b):
  if(a==b):
    print("YES")
  else:
    print("NO")

def op(o,a,b):
  if(o==0):
    unionParent(a,b)
  elif(o==1):
    findParent(a,b)
  
for i in range(m):
  o,a,b = map(int,[int(x) for x in sys.stdin.readline().split()])
  a=getParent(a)
  b=getParent(b)
  op(o,a,b)
