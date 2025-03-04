import sys

[N,M] = map(int,sys.stdin.readline().split())

name_dict = {}
number_dict = {}

for i in range(1,N+1):
    name = sys.stdin.readline().split('\n')[0]
    name_dict[name] = int(i)
    number_dict[int(i)] = name

for i in range(1,M+1):
    question = sys.stdin.readline().split('\n')[0]
    if(question.isalpha()):
        print(name_dict[question])
    else:
        print(number_dict[int(question)])



