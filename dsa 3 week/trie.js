class Node {
  constructor() {
    this.keys = new Map();
    this.eow = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  add(input, node = this.root) {
    if (input.length == 0) {
      node.eow = true;
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  }

  print() {
    let arr = [];

    function search(node, string) {
      if (node.keys.size != 0) {
        for (let i of node.keys.keys()) {
          search(node.keys.get(i), string.concat(i));
        }
        if (node.eow) {
          arr.push(string);
        }
      } else {
        string.length > 0 ? arr.push(string) : undefined;
        return;
      }
    }

    search(this.root, new String());
    console.log(arr);
  }

  search(word) {
    let node = this.root;
    while (word.length > 1) {
      if (node.keys.has(word[0])) {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      } else {
        return false;
      }
    }
    if (node.keys.has(word) && node.keys.get(word).eow) {
      return true;
    } else {
      return false;
    }
  }
  
  autocomplete(word) {
    let node = this.root;
    let output = [];

    for (let i = 0; i < word.length; i++) {
      if (!node.keys.get(word[i])) {
        return output;
      }
      node = node.keys.get(word[i]);
    }

    function search(node, string) {
      if (node.keys.size != 0) {
        for (let i of node.keys.keys()) {
          search(node.keys.get(i), string.concat(i));
        }
        
        if (node.eow) {
          output.push(word+string);
        }
      } else {
        string.length > 0 ? output.push(word+string) : undefined;
        return;
      }
    }

    search(node, new String());
    console.log("auto correction ="+output);
  }
}

const trie = new Trie();
trie.add("babu");
trie.add("bat");
trie.add("ball");
trie.add("ballon");
trie.add("belgium");
trie.add("Brazil");

trie.print();
console.log(trie.search("balls"));

trie.autocomplete("ba")
