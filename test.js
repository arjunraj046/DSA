class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.root = this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newnode) {
    if (root.value > newnode.value) {
      if (root.left == null) {
        root.left = newnode;
      } else {
        this.insertNode(root.left, newnode);
      }
    } else if (root.value < newnode.value) {
      if (root.right == null) {
        root.right = newnode;
      } else {
        this.insertNode(root.right, newnode);
      }
    } else {
      if (!root.left && !root.right) {
        return null;
      }else if (!root.left) {
            return newnode
      } else {
        
      }
    }
  }
}
 
let bst = new bst();
bst.insert(10);
