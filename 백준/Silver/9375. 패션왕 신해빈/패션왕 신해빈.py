T = int(input())

def clothes_case(n):
  closet={}
  for i in range(n):
    clothes,type = input().split()
    if(type in closet):
      closet[type].append(clothes)
    else:
      closet[type] = [clothes]
  if(len(closet)==1):
    for i in closet.keys():
      return len(closet[i])
  else:
    cnt=1
    for i in closet.keys():
      cnt*=len(closet[i])+1 #해당 품목을 걸치지 않았을 때
    cnt-=1 #아무것도 걸치지 않았을때를 제외한다.
    return cnt

for i in range(T):
  n = int(input())
  print(clothes_case(n))