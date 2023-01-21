s = input()
arr = []

for i in range(len(s)):
  for j in range(len(s)):
    if(i!=j+1):
      if(s[i:j+1]!=''):
        arr.append(s[i:j+1])


print(len(set(arr)))