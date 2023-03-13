# dp[n][x]는 n번째 줄에서 x번 인덱스를 선택했을 때 나올 수 있는 최댓값
# dp[n][x] = if x == 0 , x = 0 or 1 , max(dp[n-1][x])
# dp[n][x] = if x == 1 , x = 0 or 1 or 2, max(dp[n-1][x])
# dp[n][x] = if x == 2 , x = 1 or 2 , max(dp[n-1][x])

N = int(input())
numbers = [list(map(int, input().split())) for _ in range(N)]
dp = [[0, 0, 0] for _ in range(N)]

dp[0] = numbers[0]


for i in range(1, N):
    for j in range(3):
        if j == 0:
            dp[i][j] = max(dp[i - 1][0], dp[i - 1][1]) + numbers[i][j]
        elif j == 1:
            dp[i][j] = max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]) + numbers[i][j]
        elif j == 2:
            dp[i][j] = max(dp[i - 1][1], dp[i - 1][2]) + numbers[i][j]

max_v = max(dp[N - 1])


for i in range(1, N):
    for j in range(3):
        if j == 0:
            dp[i][j] = min(dp[i - 1][0], dp[i - 1][1]) + numbers[i][j]
        elif j == 1:
            dp[i][j] = min(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]) + numbers[i][j]
        elif j == 2:
            dp[i][j] = min(dp[i - 1][1], dp[i - 1][2]) + numbers[i][j]


min_v = min(dp[N - 1])

print(max_v, min_v)
