import heapq

INF = 1e9
heap = []
distance = {}
graph = {}
previous = {}
N = int(input())
M = int(input())

for i in range(1, N + 1):
    graph[i] = []

for i in range(M):
    V_start, V_end, T = map(int, input().split())
    graph[V_start].append({"node": V_end, "weight": T})


# 시작,끝
A, B = map(int, input().split())

for i in range(1, N + 1):
    if i == A:
        distance[i] = 0  # 자기 자신의 거리는 0
    else:
        distance[i] = INF

heapq.heappush(heap, (distance[A], A))

while heap:
    city_distance, city = heapq.heappop(heap)
    if city == B:
        break
    if city_distance != INF:
        for neighbor in graph[city]:
            node = neighbor["node"]
            weight = neighbor["weight"]
            candidate = distance[city] + weight
            if candidate < distance[node]:
                distance[node] = candidate
                previous[node] = city
                heapq.heappush(heap, (candidate, node))

print(distance[B])
