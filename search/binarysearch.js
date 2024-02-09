function binarysearch(arr, t) {
  let lindex = 0;
  let rindex = arr.length - 1;
  while (lindex <= rindex) {
    let middle = Math.floor((lindex + rindex) / 2);
    if (t < arr[middle]) {
    } else {
    }
  }
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
binarysearch(a, 7);
 