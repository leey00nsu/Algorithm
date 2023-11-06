function solution(phone_book) {
  let phone_book_sorted = phone_book.sort();
  let answer = true;

  for (let i = 0; i < phone_book_sorted.length - 1; i++) {
    let prefix = phone_book_sorted[i];
    let next_phone = phone_book_sorted[i + 1];
    if (next_phone.startsWith(prefix)) answer = false;
  }

  return answer;
}