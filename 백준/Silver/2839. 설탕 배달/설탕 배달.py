n = int(input())
INF=1e9
min_case = INF

for i in range(0,n//5+1):
  for j in range(0,n//3+1):
    left = (n-5*i-3*j)
    if(left==0):
      min_case=min(min_case,i+j)

if(min_case == INF):
  print(-1)
else:
  print(min_case)
    
    



  