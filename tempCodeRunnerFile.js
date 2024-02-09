r (let i = len - 1; i >= 0; i--) {
            this.swap(this.arr, 0, i)
            this.heapify(this.arr, 0, i)
        }