import sys
from collections import deque

M,N = map(int, sys.stdin.readline().split())
tomatos = [list(map(int, input().split())) for _ in range(N)]
queue = deque([])
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

for i in range(N):
  for j in range(M):
    if(tomatos[i][j]==1):
      queue.append([i,j])

def bfs():
  while(queue):
    x,y = queue.popleft()
    for i in range(4):
      new_x = dx[i]+x
      new_y = dy[i]+y
      if(0<=new_x<N and 0<=new_y<M and tomatos[new_x][new_y]==0):
        tomatos[new_x][new_y] = tomatos[x][y]+1 # 영향받은 토마토의 일수로부터 1일을 더한다
        queue.append([new_x,new_y])

def min_days():
  days = 0 # 0일부터 시작
  for i in tomatos:
    for j in i:
      if j==0:
        print(-1) # 일수가 0일인 토마토가 있다면
        return
    days = max(days,max(i))

  print(days-1) # 토마토가 1일부터 시작하므로 1을 빼준다

bfs()
min_days()