from collections import deque
import math
import sys

N = int(sys.stdin.readline())
Q = deque()

def enqueue(val):
  Q.append(val)
  bubbleUp()


def bubbleUp():
  index = len(Q)-1
  while(index>0):
    current = Q[index]
    parent_index = math.floor(index/2)
    parent = Q[parent_index]
    if(current>parent):
      break
    temp = Q[index]
    Q[index]=Q[parent_index]
    Q[parent_index]=temp
    index=parent_index

def bubbleDown():
  index = 0
  length = len(Q)-1
  while(index < length):
    current = Q[index]
    left_child_index = index*2
    right_child_index = index*2+1
    swap = None
    if(left_child_index <= length):
      left_child = Q[left_child_index]
      if(left_child<current):
        swap = left_child_index
    if(right_child_index <= length):
      right_child = Q[right_child_index]
      if(right_child<current):
        if(swap==None or (swap!=None and left_child>right_child)):
          swap = right_child_index

    if(swap==None):
      break
    temp = Q[swap]
    Q[swap]=Q[index]
    Q[index]=temp
    index = swap

def dequeue():
  if(not len(Q)):
    return 0
  
  if(len(Q)==1):
    return Q.pop()

  temp = Q[0]
  Q[0]=Q[len(Q)-1]
  Q[len(Q)-1]=temp
  min_x = Q.pop()
  bubbleDown()
  return min_x




for i in range(N):
  x = int(sys.stdin.readline())
  if(x==0):
    print(dequeue())
  else:
    enqueue(x)
