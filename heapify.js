class Heapify {
    constructor(arr) {
        this.arr = arr
    }

    swap(array, index1, index2) {
        let temp = array[index1]
        array[index1] = array[index2]
        array[index2] = temp
    }

    heapify (arr, index, len) {
        let left = 2 * index
        let right = 2 * index + 1
        let maximum

        if (right < len) {
            if (arr[left] >= arr[right])
                maximum = left
            else
                maximum = right
        } else if (left < len) {
            maximum = left
        } else {
            return
        }

        if (arr[index] < arr[maximum]) {
            this.swap(arr, index, maximum)
            this.heapify(arr, maximum, len)
        }
    }

    sort() {
        let len = this.arr.length
        for (let i = (Math.floor(len / 2) - 1); i >= 0; i--)
            this.heapify(this.arr, i, len)

        for (let i = len - 1; i >= 0; i--) {
            this.swap(this.arr, 0, i)
            this.heapify(this.arr, 0, i)
        }
        return this.arr
    }  
}

let arr = [3, 5, 7, 2, 6, 0, 8, 3]
const heap = new Heapify(arr)
console.log(heap.sort());