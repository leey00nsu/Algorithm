def fib(n):
  if(n==0):
    return [1,0]
  elif(n==1):
    return [0,1]

  dp=[0]*(n+1)
  dp[0]=[1,0]
  dp[1]=[0,1]
  for i in range(2,len(dp)):

    dp[i] = [x+y for x,y in zip(dp[i-2],dp[i-1])] # 두 배열 각 자리 더하기

  return dp[n]




T = int(input())

for i in range(T):
  N = int(input())
  zero,one = fib(N)
  print(zero,one)
