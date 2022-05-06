#include <stdio.h>

int factorial(int n) {
  if(n>0)
    return n*factorial(n-1);
  else
    return 1;
}
int main() {
    int n,result;
    scanf("%d",&n);
    result=factorial(n);
    printf("%d",result);
    return 0;
}
  