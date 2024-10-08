function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  
  class BST {
    constructor(val) {
      this.root = new Node(val);
    }
  
    add(val) {
      let newNode = new Node(val);
  
      function findPosAndInsert(currNode, newNode) {
        if (newNode.val < currNode.val) {
          if (!currNode.left) {
            currNode.left = newNode;
          } else {
            findPosAndInsert(currNode.left, newNode);
          }
        } else {
          if (!currNode.right) {
            currNode.right = newNode;
          } else {
            findPosAndInsert(currNode.right, newNode);
          }
        }
      }
  
      if (!this.root) {
        this.root = newNode;
      } else {
        findPosAndInsert(this.root, newNode);
      }
    }
  
    remove(val) {
      let self = this;
      let removeNode = function (node, val) {
        if (!node) {
          return null;
        }
        if (val === node.val) {
          if (!node.left && !node.right) {
            return null;
          }
          if (!node.left) {
            return node.right;
          }
          if (!node.right) {
            return node.left;
          }
          let temp = self.getMinimum(node.right);
          node.val = temp;
          node.right = removeNode(node.right, temp);
          return node;
        } else if (val < node.val) {
          node.left = removeNode(node.left, val);
          return node;
        } else {
          node.right = removeNode(node.right, val);
          return node;
        }
      };
      this.root = removeNode(this.root, val);
    }
  
    getMinimum(node) {
      if (!node) {
        node = this.root;
      }
      while (node.left) {
        node = node.left;
      }
      return node.val;
    }
  
    // helper method
    contains(value) {
      let doesContain = false;
  
      function traverse(bst) {
        if (this.root.value === value) {
          doesContain = true;
        } else if (this.root.left !== undefined && value < this.root.value) {
          traverse(this.root.left);
        } else if (this.root.right !== undefined && value > this.root.value) {
          traverse(this.root.right);
        }
      }
  
      traverse(this);
      return doesContain;
    }
  }
  
  const bst = new BST(4);
  bst.add(3);
  bst.add(5);
  bst.remove(3);
  console.log(bst);