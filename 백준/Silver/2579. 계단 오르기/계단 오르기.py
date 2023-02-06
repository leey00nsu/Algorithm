n = int(input())
steps=[0]
dp=[0]*(n+1)
for i in range(n):
  steps.append(int(input()))

dp[0]=0
dp[1]=steps[1]
if(n>1):
  dp[2]=dp[1]+steps[2]

for i in range(3,n+1):
  dp[i]=max((dp[i-2]+steps[i]),(steps[i]+steps[i-1]+dp[i-3]))

print(dp[n])