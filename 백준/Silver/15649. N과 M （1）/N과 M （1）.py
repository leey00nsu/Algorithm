n,m = map(int,input().split())
arr=[] # 사용될 수 있는 수의 배열
temp_arr = [0] * m # 경우의 수 배열
result_arr = [] # 최종적으로 저장될 경우의 수 배열
visited = [0] * n # 해당 수가 쓰였는지 확인

#경우의 수
for i in range(1,n+1):
  arr.append(i)

def permutation(index):
  if (m == index):
    print(*temp_arr) # 리스트 값만 출력
    result_arr.append(temp_arr.copy()) #얕은 복사로 값만 배열에 넣는다.
    return
  else:
    for i in range(n):
      if(visited[i]):
        continue
      visited[i]=1
      temp_arr[index]=arr[i]
      permutation(index+1)
      visited[i]=0

permutation(0) # 0번 index 부터 시작