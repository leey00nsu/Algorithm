array = []
sum=0
solved=0
for i in range(9):
  temp = int(input())
  sum+=temp
  array.append(temp)


diff = sum-100
for i in array:
  if(solved ==0 ):
    for j in array:
      if(i+j == diff and i!=j):
        array.remove(i)
        array.remove(j)
        solved=1

array.sort()
for i in array:
  print(i)
