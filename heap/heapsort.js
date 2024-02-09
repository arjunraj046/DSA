// function sort( arr)
//     {
//         var N = arr.length;
  
//         // Build heap (rearrange array)
//         for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
//             heapify(arr, N, i);
  
//         // One by one extract an element from heap
//         for (var i = N - 1; i > 0; i--) {
//             // Move current root to end
//             var temp = arr[0];
//             arr[0] = arr[i];
//             arr[i] = temp;
  
//             // call max heapify on the reduced heap
//             heapify(arr, i, 0);
//         }
//     }
  
//     // To heapify a subtree rooted with node i which is
//     // an index in arr[]. n is size of heap
//     function heapify(arr, N, i)
//     {
//         var largest = i; // Initialize largest as root
//         var l = 2 * i + 1; // left = 2*i + 1
//         var r = 2 * i + 2; // right = 2*i + 2
  
//         // If left child is larger than root
//         if (l < N && arr[l] > arr[largest])
//             largest = l;
  
//         // If right child is larger than largest so far
//         if (r < N && arr[r] > arr[largest])
//             largest = r;
  
//         // If largest is not root
//         if (largest != i) {
//             var swap = arr[i];
//             arr[i] = arr[largest];
//             arr[largest] = swap;
  
//             // Recursively heapify the affected sub-tree
//             heapify(arr, N, largest);
//         }
//     }
  
//     /* A utility function to print array of size n */
//     function printArray(arr)
//     {
//         var N = arr.length;
//         for (var i = 0; i < N; ++i)
//             document.write(arr[i] + " ");
          
//     }
  
  
//     var arr = [12, 11, 13, 5, 6, 7];
//     var N = arr.length;
  
//     sort(arr);
  
//     document.write( "Sorted array is");
//     printArray(arr, N);



const buildMaxHeap = (arr) => {
  // Get index of the middle element
  let i = Math.floor(arr.length / 2 - 1);

  // Build a max heap out of
  // All array elements passed in
  while (i >= 0) {
    heapify(arr, i, arr.length);
    i -= 1;
  }
}

const heapify = (heap, i, max) => {
  let index;
  let leftChild;
  let rightChild;

  while (i < max) {
    index = i;

    // Get the left child index 
    // Using the known formula
    leftChild = 2 * i + 1;
    
    // Get the right child index 
    // Using the known formula
    rightChild = leftChild + 1;

    // If the left child is not last element 
    // And its value is bigger
    if (leftChild < max && heap[leftChild] > heap[index]) {
      index = leftChild;
    }

    // If the right child is not last element 
    // And its value is bigger
    if (rightChild < max && heap[rightChild] > heap[index]) {
      index = rightChild;
    }

    // If none of the above conditions is true
    // Just return
    if (index === i) {
      return;
    }

    // Else swap elements
    swap(heap, i, index);

    // Continue by using the swapped index
    i = index;
  }
}

const swap = (arr, firstItemIndex, lastItemIndex) => {
  const temp = arr[firstItemIndex];

  // Swap first and last items in the array
  arr[firstItemIndex] = arr[lastItemIndex];
  arr[lastItemIndex] = temp;
}

const heapSort = (arr) => {
  // Build max heap
  buildMaxHeap(arr);

  // Get the index of the last element
  lastElement = arr.length - 1;

  // Continue heap sorting until we have
  // One element left
  while (lastElement > 0) {
    swap(arr, 0, lastElement);
    heapify(arr, 0, lastElement);
    lastElement -= 1;
  }
  
  // Return sorted array
  return arr;
}
