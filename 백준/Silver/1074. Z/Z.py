N,r,c = map(int,input().split())

def visit_Z(N,r,c,w):
  if(N==1):
    if(r==0):
      if(c==0):
        return w+0
      else:
        return w+1
    else:
      if(c==0):
        return w+2
      else:
        return w+3

  N_length = 2**N
  if(r>(N_length/2-1)):
    if(c>(N_length/2-1)):
      w+= 3*(4**(N-1))
      r -= N_length/2
      c -= N_length/2
    else:
      w+= 2*(4**(N-1))
      r -= N_length/2
  else:
    if(c>(N_length/2-1)):
      w+= 1*(4**(N-1))
      c -= N_length/2
    else:
      #2분면에서는 그대로 재귀해도 된다.
      pass

  return visit_Z(N-1,r,c,w)


print(visit_Z(N,r,c,0))



  