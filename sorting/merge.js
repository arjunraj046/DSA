function mergeSort(arr){
if (arr.length < 2) {
    return arr
}
const middle = Math.floor( arr.length / 2 )
const left = arr.slice(0,middle)
const right = arr.slice(middle )
return merge( mergeSort(left), mergeSort(right) )
}

function merge( left,right){

    const sortedarr = []
    while (left.length && right.length) {
        if ( left[0] <= right[0]) {
            sortedarr.push(left.shift())
        } else { 
            sortedarr.push(right.shift())
        }
    }
    return [...sortedarr,...left,...right]
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sortedpart = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedpart.push(left.shift());
    } else {
      sortedpart.push(right.shift());
    }
  }
  return [...sortedpart, ...left, ...right];
}

let arr = [4, 67, 32, 76, 23, 45, 62, 568];
let sortedarray = mergeSort(arr);

console.log(sortedarray);
