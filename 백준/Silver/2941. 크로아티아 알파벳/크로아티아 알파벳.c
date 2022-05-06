#include <stdio.h>
int main()
{
  int num=0;
  char s[101]={0,};
  scanf("%s",s);

  for(int i=0;i<101;i++)
    {
      if(s[i]=='c' && s[i+1]=='=')
      {
        num++;
        i++;
      }
      else if(s[i]=='c' && s[i+1]=='-')
      {
        num++;
        i++;
      }
      else if(s[i]=='d' && s[i+1]=='z' && s[i+2]=='=')
      {
        num++;
        i+=2;
      }
      else if(s[i]=='d' && s[i+1]=='-')
      {
        num++;
        i++;
      }
      else if(s[i]=='l' && s[i+1]=='j')
      {
        num++;
        i++;
      }
      else if(s[i]=='n' && s[i+1]=='j')
      {
        num++;
        i++;
      }
      else if(s[i]=='s' && s[i+1]=='=')
      {
        num++;
        i++;
      }
      else if(s[i]=='z' && s[i+1]=='=')
      {
        num++;
        i++;
      }
      else if(s[i]>='a' && s[i]<='z')
      {
        num++;
      }
    }

  printf("%d",num);
}
