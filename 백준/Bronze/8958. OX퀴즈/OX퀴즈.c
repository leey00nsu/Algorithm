#include <stdio.h>
int main()
{
    int n,check=0;
    scanf("%d",&n);
    int score[n];
    
    for(int i=0;i<n;i++)
    {
        score[i]=0;
        char quiz[80]={0,};
        scanf("%s",quiz);
        for(int j=0;j<80;j++)
        {
            if(quiz[j]=='O')
                check++;
            else if(quiz[j]=='X')
            {
                for(int k=check;k>0;k--)
                {
                    score[i]=score[i]+k;
                }
                check=0;
            }
            if(j==79 && check>0)
            {
                for(int k=check;k>0;k--)
                {
                    score[i]=score[i]+k;
                }
                check=0;
              
            }
        }
    }
    
    for(int m=0;m<n;m++)
    {
        printf("%d\n",score[m]);
    }
}