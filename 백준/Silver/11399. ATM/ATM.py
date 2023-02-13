N = int(input())
result=[] #현재 인덱스의 사람이 인출하기까지 걸리는 시간.
cnt=0
P = list(map(int,input().split()))

P.sort()

for i in range(N):
  cnt += P[i]
  result.append(cnt)

print(sum(result))