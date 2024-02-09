// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     for (j = i; j > 0; j--) {
//       if (arr[j] < arr[j - 1]) {
//         const temp = arr[j];
//         arr[j] = arr[j - 1];
//         arr[j - 1] = temp;
//       } else {
//         break;
//       }
//     }
//   }
//   return arr
// }

function insertionsort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
}

let arr1 = [45, 64, 24, 75, 42, 64];
let sortedarray1 = insertionsort(arr1);
console.log(sortedarray1);
