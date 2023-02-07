w = [[[0 for _ in range(21)] for _ in range(21)] for _ in range(21)]
for i in range(21):
  for j in range(21):
    for k in range(21):
       if(i<=0 or j<=0 or k<=0):
        w[i][j][k] = 1
       elif(i<j and j<k):
        w[i][j][k] = w[i][j][k-1] + w[i][j-1][k-1] - w[i][j-1][k]
       else:
        w[i][j][k] = w[i-1][j][k] + w[i-1][j-1][k] + w[i-1][j][k-1]-w[i-1][j-1][k-1]

def get_w(a,b,c):
      if(a<=0 or b<=0 or c<=0):
        return w[0][0][0]
      if(a>20 or b>20 or c>20):
        return w[20][20][20]

      return w[a][b][c]

while(True):
  a,b,c = map(int,input().split())

  if(a == -1 and b == -1 and c == -1):
    break;
  print(f"w({a}, {b}, {c}) = {get_w(a,b,c)}")



