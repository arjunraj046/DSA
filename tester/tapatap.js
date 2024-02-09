let str = "fhdghirtwhdkjgshfe";
let result = new Set()
let l = str.length;
for (let i = 0; i < l; i++) {
  let count = 1; 
  for (let j = i + 1; j < l; j++) {
    if (str[i] === str[j]) {
      count += 1;
    }
  }
  if(count > 1){
    let obj = {
      letter : str[i],
      count : count
    }
    let got = false
    for(let elem of result){
      if(elem.letter === str[i]){
        got = true;
        break;
      }
    }
    if(!got){
      result.add(obj);
    }
  }
}
console.log(result);