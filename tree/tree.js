class node {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    // console.log("checking empty or not");
    return this.root === null;
  }

  insert(value) {
    const newNode = new node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      // console.log(this.root);
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left == null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right == null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (root == null) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
  //   display the tree
  // left - root - right
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  // left - right - root
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  // root - left - right
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
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

  minValueLeaf(root) {
    if (root.left == null) {
      return root;
    } else {
      return this.minValueLeaf(root.left);
    }
  }
  maxValueLeaf(root) {
    if (root.right == null) {
      return root;
    } else {
      return this.maxValueLeaf(root.right);
    }
  }

  remove(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root == null) {
      return root;
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
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

      root.value = this.minValueLeaf(root.right);
      root.right = this.deleteNode(root.right, root.value);

      
    }
    return root;

  }
}

const bst = new binarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);

bst.levelOrder();

bst.remove(10);

// bst.levelOrder()

// console.log("preOrder");
// bst.preOrder(bst.root);

// console.log("inOrder");
// bst.inOrder(bst.root);

// console.log("postOrder");
// bst.postOrder(bst.root);

// console.log("bst level order");
// bst.levelOrder();

// console.log("min value : ", bst.minValueLeaf(bst.root));
// console.log("max value : ", bst.maxValueLeaf(bst.root));

// console.log(bst.root);
// console.log("search value found" ,bst.search( bst.root, 10) );
// console.log("search value found" ,bst.search( bst.root, 5) );
// console.log("search value found" ,bst.search( bst.root, 15) );
// console.log("search value found" ,bst.search( bst.root, 20) );

// console.log("The tree is empty : ", bst.isEmpty());
