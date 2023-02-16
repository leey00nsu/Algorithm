
from itertools import product
import math
N = int(input())
M = int(input())
numbers=['0','1',"2","3","4","5","6","7","8","9"]
broken = [] # 고장난 버튼 배열

if(M!=0):
  broken = list(map(str,input().split()))
  numbers = list(set(numbers)-set(broken))
  numbers.sort()

def zero_or_one(arr):
  filtered=[]
  for i in arr:
    filtered.append(i)
    if(i=='0'):
      continue
    else:
      break
  return filtered

def closest_num(target,numbers):
  max_digits=len(str(target))
  diff = math.inf
  closest=0
  result = list(product(numbers,repeat =max_digits)) # 모든 순열 구하기
  for i in result:
    tmp = int("".join(i))
    tmp_diff = abs(N-tmp)+max_digits
    if(tmp_diff<diff):
      diff=tmp_diff
      closest=tmp

  result = list(product(zero_or_one(numbers),repeat =max_digits+1)) # 모든 순열 구하기
  for i in result:
    tmp = int("".join(i))
    tmp_diff = abs(N-tmp)+max_digits+1
    if(tmp_diff<diff):
      diff=tmp_diff
      closest=tmp

  if(max_digits>1):
    result = list(product(max(numbers),repeat =max_digits-1)) # 모든 순열 구하기
    for i in result:
      tmp = int("".join(i))
      tmp_diff = abs(N-tmp)+max_digits-1
      if(tmp_diff<diff):
        diff=tmp_diff
        closest=tmp


  return closest,diff

def minimum_button(N,numbers):
  if(N==100): # 100은 현재 보고 있는 채널이다.
    return 0

  base_diff = abs(N-100) # +,- 버튼만 눌러서 이동한 수

  if(M==10):
    return base_diff
  
  closest,diff = closest_num(N,numbers)

  if(base_diff<diff):
    return base_diff
  return diff


  
print(minimum_button(N,numbers))
