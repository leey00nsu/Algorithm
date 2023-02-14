N,K = map(int,input().split())
A=[] #동전의 가치
cnt=0 #동전의 개수

for i in range(N):
  A.append(int(input()))

for i in A[::-1]: #A를 거꾸로 반복한다.
  cnt += K//i
  K = K%i
  if(K==0):
    break

print(cnt)

