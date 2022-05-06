#include <stdio.h>
int digit(int n) //자릿수 구하고 등차수열인지 확인하는 함수
{
    int d1,d2,d3,num;
    d3=n/100; //백의자리
    d2=(n/10)%10; //십의자리
    d1=(n%10)%10; //일의자리
    num=d2-d1; //공차 구하기
    if(d3==(d2+num)) //등차수열인지 체크
    {
        return 1;
    }
    else
        return 0;
}
int main()
{
    int n,d1,d2,d3,count=99;
    scanf("%d",&n);
    if(n<100)
    {
        printf("%d",n);
    }
    else if(n<1000)
    {
        for(int i=100;i<=n;i++)
        {
            count+=digit(i);
        }
        printf("%d",count);
    }
    else if(n==1000)
    {
      printf("144");
    }
}