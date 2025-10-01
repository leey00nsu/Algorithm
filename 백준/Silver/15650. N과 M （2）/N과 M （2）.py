import sys
from itertools import combinations

N,M = map(int,sys.stdin.readline().split())

candidate = [i for i in range(1,N+1)]


result = list(combinations(candidate,M))

for i in result:
    print(' '.join(map(str,list(i))))
    

