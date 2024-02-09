// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

class LinkedList {
  constructor(arr) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let i = 0; i < arr.length; i++) {
      this.append(arr[i]);
    }
  }

  append(value) {
    // const newNode = new Node(value);
    const newNode = {
      value:value,
      next:null
  }
    
    // console.log(this.head);
    // console.log(this.tail);
    // console.log(this.length);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
}

const myArray = [10, 20, 30, 40, 50];
const myLinkedList = new LinkedList(myArray);
console.log(myLinkedList);