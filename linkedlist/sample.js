class linkedlist {
  constructor(array) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    for (let i = 0; i < array.length; i++) {
      this.addtolinkedlist(array[i]);
    }
  }
  addtolinkedlist(val) {
    const newnode = {
      value: val,
      next: null,
    };
    if (!this.head) {
      this.head = newnode;
      this.tail = this.head;
    } else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
    this.length++
  }
  reverse() {
    let first = this.head;
    let second = first.next;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null
    this.head = first
  }
}
const arr = [1, 2, 3, 3, 4, 5, 6, 7];
const list = new linkedlist(arr);
console.log(list);

list.reverse(list);
console.log(list);
