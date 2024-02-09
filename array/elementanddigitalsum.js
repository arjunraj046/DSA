function sum(arr) {
  let Esum = 0;
  let Dsum = 0;

  for (let i = 0; i < arr.length; i++) {
    Esum += arr[i]
    let n = arr[i]
    while( n > 0 ){
        // 5
        Dsum += n % 10

        // n=15/10=1
        n = ( n / 10 )
        console.log(n)
    }
  }
  console.log(Dsum);
  console.log(Esum);
}

let arr1 = [1, 15, 6, 3]
let arr2 = [1, 3, 4]

sum(arr1);
// sum(arr2)
