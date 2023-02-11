N = int(input())

def fac(n):
  temp=1
  for i in range(1,n+1):
    temp *= i
  
  return temp


def zero_of_fac(n):
  arr_n = list(str(n))
  cnt=0
  for i in arr_n[::-1]:
    if(i=='0'):
      cnt+=1
    else:
      break

  return cnt

print(zero_of_fac(fac(N)))