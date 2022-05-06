#include <stdio.h>

int main() {
    int n,layer=0,temp=2;
    scanf("%d",&n);
  
    if(n==1) layer=0;
    else {
      while(1) {
        layer++;
        temp=temp+6*(layer);
        if(n<temp) break;
      }
    }
    printf("%d",layer+1);
    return 0;
}
  