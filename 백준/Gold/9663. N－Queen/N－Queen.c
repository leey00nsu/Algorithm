#include <stdio.h>
#include <stdlib.h>

int col[15] = {
    0,
};

int n;
int cnt = 0;

void printqueens()
{
  cnt++;
}

int promising(int i)
{
  int k = 0;
  while (k < i)
  {
    if (col[i] == col[k] || abs(col[i] - col[k]) == abs(i - k)) //유망하지 않다 (가능성이 없다)
      return 0;
    k++;
  }

  return 1; // 유망하다
}

void queens(int i)
{
  int j;
  if (promising(i))
  {

    if (i == (n - 1))
    {
      printqueens();
      return;
    }
    else
    {
      for (j = 0; j < n; j++)
      {
        col[i + 1] = j;
        queens(i + 1);
      }
    }
  }
}

int main()
{
  scanf("%d", &n);

  queens(-1); //배열이 0부터 시작하므로 출발은 -1로부터
  printf("%d", cnt);
}