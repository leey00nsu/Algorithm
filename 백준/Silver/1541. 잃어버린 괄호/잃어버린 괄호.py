line = input()
temp=''
arr = []
for i in line:
  if(i=='+' or i=='-'):
    arr.append(temp)
    arr.append(i)
    temp=''
  else:
    temp+=i

arr.append(temp)

def calc(arr):
  result=0
  op=1
  isNegative=False
  for i in arr:
    if(i=='+'):
      if(isNegative):
        op=-1
      else:
        op=1
    elif(i=='-'):
      op=-1
      isNegative=True
    else:
      result+=int(i)*op


  return result


print(calc(arr))
