N = int(input())
words=[]
for i in range(N):
  words.append(input())


words = list(set(words))
words = sorted(words)
words = sorted(words,key = lambda x:len(x) )

for i in words:
  print(i)