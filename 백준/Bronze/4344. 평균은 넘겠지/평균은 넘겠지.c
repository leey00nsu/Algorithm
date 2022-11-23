#include <stdio.h>
int main()
{
    int n,n2,n3;
    scanf("%d",&n);
    double average[n],temp;
    for(int i=0;i<n;i++)
    {
        temp=0;
        n3=0;
        scanf("%d",&n2);
        int score[n2];
        for(int j=0;j<n2;j++)
        {
            scanf("%d",&score[j]);
            temp=temp+score[j];
        }
        temp=temp/n2; //평균
        for(int k=0;k<n2;k++)
        {
            if(score[k]>temp)
                n3++;
        }
        average[i]=((double)n3/n2)*100;
        
        printf("%.3lf%%\n",average[i]);
    }
}