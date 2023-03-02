N =  int(input())
colors= [[0, 0, 0] for _ in range(N)]
cost = [[0, 0, 0] for _ in range(N)]
tot=0

for i in range(N):
    R,G,B = map(int,input().split())
    colors[i]= [R,G,B]

cost[0] = colors[0]


for i in range(1,N):
    cost[i][0] = min(cost[i-1][1],cost[i-1][2]) + colors[i][0] #R
    cost[i][1] = min(cost[i-1][0],cost[i-1][2]) + colors[i][1] #G
    cost[i][2] = min(cost[i-1][0],cost[i-1][1]) + colors[i][2] #B

   
print(min(cost[N-1]))