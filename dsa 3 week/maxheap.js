class maxHeap {
  constructor() {
    this.heap = [null];
  }
  insert(value) {
    this.heap.push(value);
    if (this.heap.length > 2) {
      let idx = this.heap.length - 1;
      while (this.heap[idx] > this.heap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          [this.heap[idx], this.heap[Math.floor(idx / 2)]] = [
            this.heap[Math.floor(idx / 2)],
            this.heap[idx],
          ];
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  }
  remove() {
    let biggest = this.heap[1];
    if (this.heap.length > 3) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);
      if (this.heap.length == 3) {
        if (this.heap[1] < this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return biggest;
      }
      let i = 1;
      let left = i * 2;
      let right = i * 2 + 1;

      while (
        this.heap[i] <= this.heap[left] ||
        this.heap[i] <= this.heap[right]
      ) {
        if (this.heap[left] > this.heap[right]) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          i = i * 2;
        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = i * 2 + 1;
        }

        left = i * 2;
        right = i * 2 + 1;
        if (this.heap[left] == undefined || this.heap[right] == undefined) 
          break;
        
      }
    } else if (this.heap.length == 2) {
      this.heap.splice(1, 1);
      return biggest;
    } else {
      returnnull;
    }
  }
}

const maxheap = new maxHeap();
maxheap.insert(30);
maxheap.insert(10);
maxheap.insert(50);
maxheap.insert(35);
maxheap.insert(45);
maxheap.insert(25);


console.log(maxheap.heap);


console.log("--------------------------------");

maxheap.remove()
console.log(maxheap.heap);



