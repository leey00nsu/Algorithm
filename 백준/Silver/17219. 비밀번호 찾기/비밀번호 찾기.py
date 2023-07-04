N,M = map(int,input().split(' '))
ids = {}
for i in range(N):
    site,password = input().split(' ')
    ids[site] = password

for i in range(M):
    site = input()
    print(ids[site])