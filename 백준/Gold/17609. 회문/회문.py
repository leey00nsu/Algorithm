

def check_palindrome(str):
    is_palindrome = True
    str_arr = list(str)
    start = 0
    end = len(str_arr)-1
    while(start<end):
        if(str_arr[start]==str_arr[end]):
            start+=1
            end-=1
        else:
            is_palindrome=False
            break;

    return is_palindrome
    
def check_pseudo_palindrome(str):
    is_pseudo_palindrome = True
    str_arr = list(str)
    start = 0
    end = len(str_arr)-1
    while(start<end):
        if(str_arr[start]==str_arr[end]):
            start+=1
            end-=1
        else:
            if(check_palindrome(str_arr[start+1:end+1]) or check_palindrome(str_arr[start:end])):
                break
            else:
                is_pseudo_palindrome = False
                break
        
    return is_pseudo_palindrome

            

T = int(input())
arr = []
result = []
for i in range(T):
    arr.append(input())

for str in arr:
    if(check_palindrome(str)):

        result.append(0)
    elif(check_pseudo_palindrome(str)):

        
        result.append(1)
    else:

        
        result.append(2)
        
        
            
for i in result:
    print(i)