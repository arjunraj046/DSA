class maxheap {
  constructor() {
    this.heap = [null];
  }
  insert(value) {
    this.heap.push(value);
    if (this.heap.length > 2) {
      let l = this.heap.length - 1;
      while (this.heap[l] > this.heap[Math.floor(l / 2)]) {
        if (l >= 1) {
          [this.heap[Math.floor(l / 2)], this.heap[l]] = [
            this.heap[l],
            this.heap[Math.floor(l / 2)],
          ];
          if (Math.floor(l / 2) > 1) {
            l = Math.floor(l / 2);
          } else {
            break;
          }
        }
      }
    }
  }
  remove() {
    let biggest = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      if (this.heap.length == 3) {
        if (this.heap[1] < this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return biggest;
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
          i = 2 * i;
        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (this.heap[left] == undefined || this.heap[right] == undefined)
          break;
      }
    }
  }
}
