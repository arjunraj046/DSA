function fact(x) {
  if (x == 0) {
    return 1;
  }
  return x * fact(x - 1);
}

let x = fact(5);
let y = fact(10);

console.log(x);
console.log(y);

