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

  // 8
  addNodeBetween(index, data) {
    const newnode = {
      value: data,
      next: null,
    };

    // let no = 0;
    let traversing = (no) => {
      let counter = 1;
      let currentnode = this.head;
      // console.log("current ===", currentnode.next);
      while (counter != no) {
        // console.log("counter ==", counter);
        counter++;
        currentnode = currentnode.next;
      }
      return currentnode;
    };
    // const previousNode = null;
    if (index <= 1) {
      newnode.next = this.head;
      this.head = newnode;
    } else if (this.length <= index) {
      let tail = this.tail;
      tail.next = newnode;
      this.tail = newnode;
    } else {
      //  7
      let no = index - 1;
      const previousNode = traversing(no);

      const nextNode = previousNode.next;
      // console.log(previousNode.value + " <=== previous node value");

      previousNode.next = newnode;
      newnode.next = nextNode;
    }
    this.length++;
  }

  toArray() {
    let current = this.head;
    // console.log("current node to array",current);
    let array = [];
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    console.log(array);
    console.log("length = ", array.length);
    // return array
  }

  findMiddleNode() {
    let m = this.length / 2;
    m = parseInt(m) - 1;
    let c = 0;
    let middlenode = this.head;
    while (c <= m) {
      c++;
      middlenode = middlenode.next;
    }

    console.log("middle node value =", middlenode.value);
  }
  findMiddleNodeEasy() {
    let fast = this.head;
    let slow = this.head;
    while (fast && slow) {
      slow = slow.next
      fast = fast.next.next      
    }
    console.log("niddle node value =",slow.value);
  }
}

//             98 65 10 - 20 (40) 50 - 60 80 900
const array = [10, 20, 40, 30, 50, 60, 80, 900];
const mylist = new linkedlist(array);

// mylist.addNodeBetween(9, 65);
// mylist.addNodeBetween(1, 98);
// mylist.addNodeBetween(2, 22);
// mylist.addNodeBetween(6, 15);
// mylist.findMiddleNode();
mylist.findMiddleNodeEasy();
mylist.toArray();

// console.log(mylist);

//\\\



// let arr = Object.freeze([10,20]) 
let myarr = [1,2,3,4]    
myarr.push(5)
console.log(myarr);
// arr.push(11)

