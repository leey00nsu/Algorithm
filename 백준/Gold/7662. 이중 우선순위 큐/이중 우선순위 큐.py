import heapq
import sys


T =  int(sys.stdin.readline())

for i in range(T):
  max_heap = []
  min_heap = []
  max_value=0
  min_value=0
  k = int(sys.stdin.readline())
  visited = [0]*k # 데이터가 들어간 순서
  insert_cnt = 0
  for j in range(k):
    op,n = sys.stdin.readline().rstrip().split()
    n = int(n)
    if(op=='I'):
      heapq.heappush(min_heap,(n,insert_cnt))
      heapq.heappush(max_heap,(-n,insert_cnt))
      insert_cnt+=1
    elif(op=='D' and max_heap):
      if(n==1): # 최대 힙에서 pop
        while(max_heap):
          max_value,pop_cnt = max_heap[0]
          if(visited[pop_cnt]):
            heapq.heappop(max_heap)
          else:
            max_value,pop_cnt = heapq.heappop(max_heap)
            visited[pop_cnt] = 1
            break       
      elif(n==-1): # 최소 힙에서 pop
        while(min_heap):
          min_value,pop_cnt = min_heap[0]
          if(visited[pop_cnt]):
            heapq.heappop(min_heap)
          else:
            min_value,pop_cnt = heapq.heappop(min_heap)
            visited[pop_cnt] = 1
            break    


  while(max_heap):
    max_value,pop_cnt = max_heap[0]
    if(visited[pop_cnt]):
      heapq.heappop(max_heap)
    else:
      break

  while(min_heap):
    min_value,pop_cnt = min_heap[0]
    if(visited[pop_cnt]):
      heapq.heappop(min_heap)
    else:
      break

  if(max_heap and min_heap):
    print(-heapq.heappop(max_heap)[0],heapq.heappop(min_heap)[0])
  else:
    print('EMPTY')