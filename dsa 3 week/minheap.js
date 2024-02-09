class minHeap {
  constructor() {
    this.heap = [null];
  }

  //   [ null , 5 , 10 ]

  insert(value) {
    this.heap.push(value);
    if (this.heap.length > 2) {
      let idx = this.heap.length - 1;
      while (this.heap[idx] < this.heap[Math.floor(idx / 2)]) {
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
    let smallest = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.length.splice(this.heap.length - 1);
      if (this.heap.length == 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;

      while (
        this.heap[i] >= this.heap[left] ||
        this.heap[i] >= this.heap[right]
      ) {
        if (this.heap[left] < this.heap[right]) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          i = i * 2;
        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = i * 2 + 1;
        }
        left = i * 2;
        right = i * 2 + 1;  
        if (this.heap[left] == undefined || this.heap[right] == undefined) {
          break 
        }
      }
    } else if (this.heap.length == 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }
  }
}

const minheap = new minHeap();
minheap.insert(30);
minheap.insert(20);

console.log(minheap.heap);
