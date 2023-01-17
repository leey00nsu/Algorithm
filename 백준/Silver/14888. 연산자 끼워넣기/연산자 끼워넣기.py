import sys
import itertools

n = int(input())

numbers=[]
operators=[]
perms = []
ans = []

numbers = list(map(int,input().split()))
operators = list(map(int,input().split()))

for i,j in zip(operators,['+','-','*','/']):
  for m in range(i):
    perms.append(j)

perms = list(itertools.permutations(perms,len(perms)))


for i in perms:
  tmp = numbers[0]
  for j in range(1,len(numbers)):
    if(i[j-1]=='+'):
      tmp +=numbers[j]
    elif (i[j-1]=='-'):
      tmp -=numbers[j]
    elif (i[j-1]=='*'):
      tmp *=numbers[j]
    elif (i[j-1]=='/'):
      if(tmp<0):
        tmp = -(abs(tmp) // numbers[j])
      else:
        tmp = tmp // numbers[j]

  ans.append(tmp)
  
print(max(ans))
print(min(ans))
  
  