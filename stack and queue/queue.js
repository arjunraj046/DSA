class node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  enqueue(data) {
    let newNode = new node(data)
    if (!this.head) {
        this.head = newNode
        this.tail = newNode
        this.length++
    } else {
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }
  }
  dequque() {
    this.head = this.head.next
    this.length--
  }
  display(){
    let current = this.head
    let arr = []
    while (current) {
        arr.push(current.value)
        current = current.next
    }
    console.log(arr);
  }
}

let myQueue = new queue()

myQueue.enqueue(10)
myQueue.enqueue(14)
myQueue.enqueue(50)
myQueue.enqueue(65)

myQueue.dequque()


myQueue.display()
// console.log(myQueue);