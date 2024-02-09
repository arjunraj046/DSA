function lenearsearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == target) {
      return i;
    }
  }
  return false;
}

let arr = [2, 3, 5, 7, 9, 8, 1];
let x = lenearsearch(arr, 8);
console.log(x);
