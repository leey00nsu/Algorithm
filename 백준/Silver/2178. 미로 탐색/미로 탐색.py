from collections import deque

N,M = map(int,input().split())
Maze=[0]*N
visited=[[0]*M for _ in range(N)]
queue = deque() # 큐 생성
dx = [1,-1,0,0]
dy = [0,0,1,-1]

for i in range(N):
  Maze[i] = list(map(int,input()))

queue.append([0,0])
visited[0][0]=1

def bfs():
  while(queue):
    i,j = queue.popleft()
    for x in range(4):
      new_i = i+dx[x]
      new_j = j+dy[x]
      if(0<=new_i<N and 0<=new_j<M and Maze[new_i][new_j]!=0 and visited[new_i][new_j]==0):
        queue.append([new_i,new_j])
        visited[new_i][new_j]=1
        Maze[new_i][new_j] = Maze[i][j] + 1

    if(Maze[N-1][M-1]!=1):
      break


bfs()

print(Maze[N-1][M-1])
