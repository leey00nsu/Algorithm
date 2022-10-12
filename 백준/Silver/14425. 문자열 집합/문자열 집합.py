import sys
cnt = 0
n,m = map(int,sys.stdin.readline().split())
strings = []
cmp_strings = []

for i in range(n):
  tmp = sys.stdin.readline()
  strings.append(tmp)

for i in range(m):
  tmp = sys.stdin.readline()
  if tmp in strings:
    cnt = cnt+1
  
print(cnt)