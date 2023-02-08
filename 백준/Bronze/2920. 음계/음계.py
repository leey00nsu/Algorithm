notes = []
asc = [1,2,3,4,5,6,7,8]
desc = [8,7,6,5,4,3,2,1]

notes = list(map(int,input().split()))

if (asc == notes):
  print("ascending")
elif (desc == notes):
  print("descending")
else:
  print("mixed")

