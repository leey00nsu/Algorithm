#include <stdio.h>
int main()
{
  int n,check=0;
  scanf("%d",&n);
  check=n;
  for(int i=0;i<n;i++)
  {
    char s[101]={0,};
    int temp[26]={0,},cnt=0;

    scanf("%s",s);
    for(int k=0;k<101;k++)
    {
      for(int j='a';j<='z';j++)
      {
          if(s[k]==j)
          {
            if(k>0 && temp[j-97]!=(k) && temp[j-97]!=0)
            {
              cnt++;
            }
            temp[j-97]=k+1;
          }
      }
    }
    if (cnt>0)
      check--;
  }
  printf("%d\n",check);
}
