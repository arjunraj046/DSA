// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let min = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }

//     const temp = arr[i];
//     arr[i] = arr[min];
//     arr[min] = temp;
//   }

//   return arr;
// }

// // let arr = [10, 38, 68, 57, 26];
// let arr = [45, 64, 24, 75, 42, 64];

// let sortarray = selectionSort(arr);

// console.log(sortarray);

// function selectionSort1(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minvalueindex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[minvalueindex] > arr[j]) {
//         minvalueindex = j;
//       }
//     }
//     let temp = arr[i];
//     arr[i] = arr[minvalueindex];
//     arr[minvalueindex] = temp;
//   }
//   return arr;
// }

// let arr1 = [45, 64, 24, 75, 42, 64];

// let sortedarray1 = selectionSort1(arr1);
// console.log(sortedarray1);



function sort(arr){
  for(let i = 0;i<arr.length -1;i++){
    let mini= i
    for(let j=i+1;j<arr.length;j++){
      if (arr[mini] > arr[j]) {
        mini=j
      }
    }
    let temp = arr[i]
    arr[i]=arr[mini]
    arr[mini]=temp
  }
  return arr
}

let arr1 = [45, 64, 24, 75, 42, 64];
let sortedarray1 = sort(arr1);
console.log(sortedarray1);






