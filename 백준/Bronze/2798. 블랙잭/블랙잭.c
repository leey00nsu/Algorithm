#include <stdio.h>
#include <stdlib.h>

int get_Max(int *deck, int n, int target)
{
  int max = 0;
  for (int i = 0; i < n; i++)
  {
    for (int j = i + 1; j < n; j++)
    {
      for (int k = j + 1; k < n; k++)
      {
        int temp = deck[i] + deck[j] + deck[k];
        if (temp > max && temp <= target)
          max = temp;
      }
    }
  }

  return max;
}
int main()
{
  int n;      // 카드의 개수
  int target; //목표한 숫자
  int *deck;  // 카드 배열
  int max;

  scanf("%d %d", &n, &target);
  deck = (int *)malloc(sizeof(int) * n); //카드의 개수만큼 동적할당
  for (int i = 0; i < n; i++)
  {
    scanf("%d", &deck[i]);
  }

  max = get_Max(deck, n, target);

  printf("%d\n", max);
}