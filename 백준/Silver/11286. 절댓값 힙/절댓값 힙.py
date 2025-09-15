import heapq
import sys

N = int(sys.stdin.readline())

p_heap = []
n_heap = []



for i in range(N):
    number = int(sys.stdin.readline())

    if (number > 0):
        heapq.heappush(p_heap,number)
    elif (number < 0):
        heapq.heappush(n_heap,-number)
    else:
        if (len(p_heap) == 0 and len(n_heap) == 0):
            print(0)
            continue
        

        if (len(p_heap) > 0 and len(n_heap) == 0):
            pMin = heapq.heappop(p_heap)
            print(pMin)
            continue
        

        if (len(p_heap) == 0 and len(n_heap) > 0):
            nMin = heapq.heappop(n_heap)
            print(-nMin)
            continue
        

        pMin = heapq.heappop(p_heap)
        nMin = -heapq.heappop(n_heap)

        if (abs(pMin) >= abs(nMin)):
            print(nMin)
            heapq.heappush(p_heap,pMin)
        elif (abs(pMin) < abs(nMin)):
            print(pMin)
            heapq.heappush(n_heap,-nMin)


    





