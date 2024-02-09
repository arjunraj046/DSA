class Node {
  constructor() {
    this.root = new Map();
    this.eow = false;
  }
}
class Triee {
  constructor() {
    this.root = new Node();
  }
  add(input, node = this.root) {
    if (input.length == 0) {
      node.eow = true;
      return;
    } else if (!node.keys.has(input[0])) {
        node.keys.set(input[0],new Node)
        return this.add(input.substr(1),node.keys.get(input[0]))
    } else {
        return this.add(input.substr(1),node.keys.get(input[0]))
    }
  }
  print(){
    let arr = []
    function search(node,string){
        if ( node.keys.size != 0 ) {
            for (const i of node.keys.keys()) {
                search(node.keys.get(i),string.concat(i))
            }
            if (node.eow) {
                arr.push(string)
            }
        }else{
            string.length > 0 ? arr.push(string) : undefined
            return
        }

    }
    search(this.root,new String())
    console.log(arr);
  }
  search(word){
    
  }
}
