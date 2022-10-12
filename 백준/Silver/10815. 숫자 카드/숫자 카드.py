import sys
n = int(input())
cards = set(map(int,sys.stdin.readline().split()))
set(cards)
m = int(input())
cmp_cards = list(map(int,sys.stdin.readline().split()))

for i in cmp_cards:
  if i in cards:
    print("1",end=" ")
  else:
    print("0",end=" ")