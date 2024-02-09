class linkedlist {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(data) {
    const newNode = {
      value: data,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(data) {
    const newNode = { 
      value: data,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, data) {
    const newNode = {
      value: data,
      next: null,
    };

    let traversing = (req) => {
      let counter = 0;
      let currentNode = this.head;
      while (counter != req) {
        counter++;
        currentNode = currentNode.next;
      }
      console.log(currentNode.value + " current node");
      return currentNode;
    };

    const leaderNOde = traversing(index - 1);
    const nextNode = leaderNOde.next;

    leaderNOde.next = newNode;
    newNode.next = nextNode;
    this.length++;
  }

  delete(index) {
    let traversing = (req) => {
      let counter = 0;
      let currentNode = this.head;
      while (counter != req) {
        counter++;
        currentNode = currentNode.next;
      }
      return currentNode;
    };

    const leadernode = traversing(index - 1);
    const unwantednode = leadernode.next;
    const nextnode = unwantednode.next;
    leadernode.next = nextnode;
    this.length--;
  }



  reverse() {
    let first = this.head; 1
     let second = first.next; 2




    while (second) {
      let temp = second.next; 3
      second.next = first;

      first = second;
      second = temp;
    }




    this.head.next = null;
    this.head = first;
  }

  linkedlisttoarray(mylist) {
    let current = mylist.head;
    console.log(current);
    let mylinkedlistToArray = [];

    while (current) {
      mylinkedlistToArray.push(current.value);
      current = current.next;
    }
    // console.log(mylinkedlistToArray);
    return mylinkedlistToArray;
  }

  middle(list) {
    let l = list.length;
    console.log(l);
    l = Math.floor( ( l + 1 )/ 2 )
    console.log(l);
    let current = this.head;
    for (let i = 0; i < l; i++) {
      current = current.next;
    }
    console.log(current);
    return current
  }
}

const mylist = new linkedlist(10);

mylist.append(20);
mylist.append(30);
mylist.append(40);
mylist.prepend(5);
mylist.insert(2, 22);
mylist.delete(2);
mylist.reverse();

console.log("linkedlist", mylist);
// console.log(mylist);

let list = mylist.linkedlisttoarray(mylist);
console.log(list);

let middle = mylist.middle(mylist);

console.log(middle);

// const twoSum = (nums, target) => {

//   const map = {};

//   for (let i = 0; i < nums.length; i++) {

//     const another = target - nums[i];

//     if (another in map) {

//       return [map[another], i];

//     }

//     map[nums[i]] = i;

//   }

//   return null;
// };

// let arr = [1,3,4,6,5,4,3,2,6,7]
// let result=twoSum(arr,10)
// console.log(result);
