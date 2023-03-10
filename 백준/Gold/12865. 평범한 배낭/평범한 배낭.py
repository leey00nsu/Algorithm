N, K = list(map(int, input().split()))
weight = [0] * N
price = [0] * N
dp = [[0] * (K + 1) for _ in range(N)]

for i in range(N):
    w, p = list(map(int, input().split()))
    weight[i] = w
    price[i] = p


for i in range(N):
    for j in range(K + 1):
        if weight[i] > j:  # 현재 가방의 무게보다 물건의 무게가 크면
            dp[i][j] = dp[i - 1][j]  # 넣지 못하므로 이전 가치를 그대로 쓴다
        else:  # 현재 가방의 무게와 물건의 무게가 같거나 더 작다면
            dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i]] + price[i])


print(dp[N - 1][K])
