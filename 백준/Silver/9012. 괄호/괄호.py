t = int(input())

def test_case(arr):
  depth = 0
  for i in range(len(arr)):
    if(depth<0):
      return "NO"
    if(arr[i]=='('):
      depth+=1
    elif(arr[i]==')'):
      depth-=1

  if(depth==0):
    return "YES"
  else:
    return "NO"

for i in range(t):
  arr = input()
  print(test_case(arr))


