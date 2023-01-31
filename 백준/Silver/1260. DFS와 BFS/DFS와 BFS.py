
import sys
sys.setrecursionlimit(15000)

n,m,v = map(int,input().split())
graph = [[0 for col in range(n)] for row in range(n)]
visited = [False] * n
bfs_queue = []
for i in range(m):
  v1,v2 = map(int,input().split())
  graph[v1-1][v2-1] = 1
  graph[v2-1][v1-1] = 1


def dfs(num):
  print(num,end=" ")
  visited[num-1] = True
  for i in range(n):
    if(visited[i]==False and graph[num-1][i]==1): 
      dfs(i+1)

def bfs(num):
  if(visited[num-1]):
    return

  bfs_queue.append(num)
  print(num,end=" ")
  visited[num-1] = True
  for i in range(n):
    if(visited[i]==False and graph[num-1][i]==1): 
      bfs_queue.append(i+1)
  
  for j in bfs_queue:
    bfs(j)

dfs(v)
visited = [False] * n
print()
bfs(v)