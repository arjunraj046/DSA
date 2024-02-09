                                             class linkedlist {
  constructor(arr) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let i = 0; i < arr.length; i++) {
      this.additemtolinkedlist(arr[i]);
    }
  }

  additemtolinkedlist(data) {
    const node = {
      value: data,
      next: null,
    };

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  addNodeBetween(index, data) {
    const newnode = {
      value: data,
      next: null,
    };
    let traversing = (no) => {
      let counter = 0;
      let currentnode = this.head;
      while (counter != no) {
        counter++;
        currentnode = currentnode.next;
      }
      return currentnode;
    };

    const previousNode = traversing(index - 1);
    const nextNode = previousNode.next
    console.log(previousNode.value + " <=== previous node value");

    previousNode.next = newnode
    newnode.next = nextNode
    this.length++

  }
}

const array = [10, 20, 40, 30, 50, 60, 80, 900];

const mylist = new linkedlist(array);

mylist.addNodeBetween(1, 65);

console.log(mylist);
