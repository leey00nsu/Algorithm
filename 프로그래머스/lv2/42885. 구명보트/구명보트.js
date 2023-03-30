class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let new_node = new Node(val);
    if (!this.head) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      this.tail.next = new_node;
      new_node.prev = this.tail;
      this.tail = new_node;
    }
    this.length += 1;
    return new_node;
  }

  pop() {
    let current = this.tail;

    if (!current) return null;
    if (current === this.head) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = current.prev;
      this.tail.next = null;
      current.prev = null;
    }
    this.length -= 1;
    return current.val;
  }

  shift() {
    let current = this.head;
    if (!current) return null;
    if (current === this.tail) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = current.next;
      this.head.prev = null;
      current.next = null;
    }

    this.length -= 1;
    return current.val;
  }

  unshift(val) {
    let new_node = new Node(val);
    if (this.length === 0) {
      this.head = new_node;
      this.tail = this.head;
    } else {
      this.head.prev = new_node;
      new_node.next = this.head;
      this.head = new_node;
    }

    this.length += 1;

    return new_node;
  }
}

function getBoats(people, limit) {
  let boats = 0;
  people.sort((a, b) => b - a);

  let deque = new DoubleLinkedList();
  for (let i = 0; i < people.length; i++) {
    deque.push(people[i]);
  }

  let curWeight = 0;
  while (deque.length) {
    boats += 1;
    let max_pop = deque.shift();

    curWeight += max_pop;

    while (deque.length) {
      let min_pop = deque.pop();
      curWeight += min_pop;

      if (curWeight > limit) {
        deque.push(min_pop);
        curWeight = 0;
        break;
      }
    }
  }

  return boats;
}

function solution(people, limit) {
    var answer = getBoats(people,limit);
    return answer;
}