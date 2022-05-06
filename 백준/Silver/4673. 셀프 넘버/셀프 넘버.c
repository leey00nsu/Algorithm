#include <stdio.h>
int main()
{
    int n[10000],count;
    for(int i=1;i<10001;i++)
    {
      int temp=i,digit=0,sum=i;
      n[i-1]=i;
      while(temp!=0)
      {
        temp=temp/10;
        digit++;
      }
      for(int j=digit-1;j>=0;j--)
      {
        temp=1;
        for(int k=j;k>0;k--)
        {
            temp=temp*10;
        }
        n[i-1]=n[i-1]+sum/temp;
        sum=sum-(sum/temp)*temp;
      }
    }
    
    for(int i=1;i<10001;i++)
    {
      count=0;
        for(int j=1;j<10001;j++)
        {
            if(i==n[j-1])
                count++;
        }
      if(count==0)
      {
        printf("%d\n",i);
      }
    }
    
}