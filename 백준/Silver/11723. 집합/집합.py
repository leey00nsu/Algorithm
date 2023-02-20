import sys
M = int(input())
outputs=[]

class Set():
  def __init__(self):
    self.S=set()
    pass

  def add(self,x):
    self.S.add(x)

  def remove(self,x):
    if(self.check(x)):
      self.S.remove(x)

  def check(self,x):
    if(x in self.S):
      return 1 #존재
    else:
      return 0

  def toggle(self,x):
    if(self.check(x)):
      self.remove(x)
    else:
      self.add(x)

  def all(self):
    self.empty()
    for i in range(1,21):
      self.S.add(i)

  def empty(self):
    self.S.clear()




S = Set()

for i in range(M):
  inputs = list(sys.stdin.readline().split())
  op = inputs[0]
  if(len(inputs)==2):
    x = int(inputs[1])
  if(op=='add'):
    S.add(x)
  elif (op=='remove'):
    S.remove(x)
  elif (op=='check'):
    print(S.check(x))
  elif (op=='toggle'):
    S.toggle(x)
  elif (op=='all'):
    S.all()
  elif (op=='empty'):
    S.empty()
