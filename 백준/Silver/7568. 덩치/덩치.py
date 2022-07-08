n = int(input())

arr=[]

for i in range(n):
  w,h = map(int,input().split())
  arr.append({'w':w,'h':h,'order':1})


for i in range(n):
  for j in range(n):
    if(arr[i]['w']<arr[j]['w'] and arr[i]['h']<arr[j]['h']):
      arr[i]['order']=int(arr[i]['order'])+1


for i in arr:
  print(i['order'], end=" ")