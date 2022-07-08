def resolve_sum(n):
  list_sum=n
  n_list = list(map(int,str(n)))
  for i in n_list:
    list_sum += i

  return list_sum


n = int(input())

min_constructor = 1000001
for i in range(1,n):
  temp = resolve_sum(i)
  if(temp == n and temp<min_constructor):
    min_constructor = i

if(min_constructor == 1000001):
  min_constructor = 0


print(min_constructor)
