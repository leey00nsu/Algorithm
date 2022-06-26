#include <stdio.h>
#include <stdlib.h>

void sort(int* arr,int size) {
  for(int i=0;i<size;i++) {
    for(int j=i+1;j<size;j++) {
      if(arr[i]>arr[j]) {
        int temp=arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}
int main() {
    int size;
    scanf("%d",&size);
    int* arr = (int*)malloc(sizeof(int)*size);
    for(int i=0;i<size;i++) {
      scanf("%d",&arr[i]);
    }

    sort(arr,size);

    for(int i=0;i<size;i++) {
      printf("%d\n",arr[i]);
    }

    
    return 0;
}
  