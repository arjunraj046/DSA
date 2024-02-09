function fibino(n) {
  if (n < 2) {
    return n;
  }
  return fibino(n - 1) + fibino(n - 2);
}

let x = fibino(10);
console.log(x);

// const fibonacci = (n) => {
//     if (n == 1) {
//         return 0;
//     } else if (n == 2 || n == 3) {
//         return 1;
//     } else {
//         return (fibonacci(n - 1) + fibonacci(n - 2))
//     }
// }

// console.log(fibonacci(10));
