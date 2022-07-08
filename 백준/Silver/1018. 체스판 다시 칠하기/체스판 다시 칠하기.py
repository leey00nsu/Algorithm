import copy
x,y = map(int,input().split())

def check(x,y):
  temp_arr=copy.deepcopy(arr)
  count_a=0
  count_b=0
  for i in range(x,x+8):
    for j in range(y,y+8):
      if(i==0 and j==0):
        if(temp_arr[i][j]=='W'):
          count_a+=1
          temp_arr[i][j]='B'
        continue

      if(i%2==0):
        if(j%2==0):
          if(temp_arr[i][j]!='B'):
            count_a+=1
            temp_arr[i][j]='B'

        else:
          if(temp_arr[i][j]!='W'):
            count_a+=1
            temp_arr[i][j]='W'        
      else:
        if(j%2==0):
          if(temp_arr[i][j]!='W'):
            count_a+=1
            temp_arr[i][j]='W'

        else:
          if(temp_arr[i][j]!='B'):
            count_a+=1
            temp_arr[i][j]='B'



  temp_arr=copy.deepcopy(arr)

  for i in range(x,x+8):
    for j in range(y,y+8):
      if(i==0 and j==0):
        if(temp_arr[i][j]=='B'):
          count_b+=1
          temp_arr[i][j]='W'
        continue

      if(i%2==0):
        if(j%2==0):
          if(temp_arr[i][j]!='W'):
            count_b+=1
            temp_arr[i][j]='W'

        else:
          if(temp_arr[i][j]!='B'):
            count_b+=1
            temp_arr[i][j]='B'        
      else:
        if(j%2==0):
          if(temp_arr[i][j]!='B'):
            count_b+=1
            temp_arr[i][j]='B'

        else:
          if(temp_arr[i][j]!='W'):
            count_b+=1
            temp_arr[i][j]='W'


  return (count_b if(count_a>count_b) else count_a)
        


arr=[]
min_fill = 64

for i in range(x):
    temp = str(input())
    arr.append(list(temp))


for i in range(x-7):
  for j in range(y-7):
    temp = check(i,j)
    if(temp<min_fill):
      min_fill = temp

print(min_fill)