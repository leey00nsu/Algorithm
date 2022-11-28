n = int(input())


for i in range(n):
  a,b = map(int,input().split())
  x=max(a,b) #큰ㅜ
  y=min(a,b) #작ㅡ수
  while(True): #유클리드 호제법을 이용하여 최대공약수를 먼저 구한다
    gcd = x%y 
    if(gcd==0):
      break
    x = y
    y = gcd
  
  print(int(a*b/y)) 

 
