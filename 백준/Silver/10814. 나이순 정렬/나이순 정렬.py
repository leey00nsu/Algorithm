N = int(input())
users = []

for i in range(N):
  age,name = input().split()
  users.append((name,int(age),int(i)))

users = sorted(users,key= lambda x:(x[1],x[2]))

for i in users:
  print(i[1],i[0])