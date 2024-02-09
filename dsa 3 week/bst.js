class Node {
  constructor(v) {
    this.value = v;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root == null;
  }
  insert(v) {
    const newNode = new Node(v);
    if (this.isEmpty) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, node) {
    if (root.value < node.value) {
      if (root.left == null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right == null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }
  search(root, v) {
    if (root == null) {
      return false;
    } else {
      if (v == root.value) {
        return true;
      } else if (root.value < v) {
        this.search(root.left, v);
      } else {
        this.search(root.right, v);
      }
    }
  }
  //   depth first traversal
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  preOrder(root) {
    if (root) {
      console.log(root.value);

      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
  //   breadth first traversal
  levelOrderTravels() {
    let queue = [];
    queue.push(this.root);

    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
  minimumValueNode(root) {
    if (root.left == null) {
      return root;
    } else {
      this.minimumValueNode(root.left);
    }
  }
  maximumValueNode(root) {
    if (root.right == null) {
      return root;
    } else {
      this.minimumValueNode(root.right);
    }
  }



  
  remove(value) {
    this.root = this.deleteNode(this.root, value);
  }


  deleteNode(root, value) {
    if (root == null) {
      return root;
    }

    if (root.value < value) {
      root.left = this.deleteNode(root.left, value);
    } else if (root.value < value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      root.value = this.minimumValueNode(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}
