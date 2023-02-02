

node = int(input())
line = int(input())
matrix = [[0] * (node+1) for i in range(node+1)]
visited = [0] * (node+1)
cnt=0

for i in range(line):
  v1,v2 = map(int,input().split())
  matrix[v1][v2] = matrix[v2][v1] = 1

def dfs(n):
  global cnt
  cnt+=1
  visited[n] = 1
  for i in range(1,node+1):
    if(visited[i]==0 and matrix[n][i] == 1):
      dfs(i)

dfs(1)
print(cnt-1)

