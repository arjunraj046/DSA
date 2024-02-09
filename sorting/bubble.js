function bubbleSort(arr) {
  let swappped;

  do {
    swappped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swappped = true;
      }
    } 
  } while (swappped);
  return arr;
}

function bubb(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr
}

let arr = [23, 54, 3, 5, 76, 86, 455,1 ];
let sortarray = bubbleSort(arr);
let sortarray1 = bubb(arr);

console.log(sortarray);
console.log(sortarray1);
