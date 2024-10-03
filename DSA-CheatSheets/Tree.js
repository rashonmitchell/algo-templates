function TreeNode(value) {
    this.value = value;
    this.children = [];
    this.parent = null;
  
    this.setParentNode = function (node) {
      this.parent = node;
    };
  
    this.getParentNode = function () {
      return this.parent;
    };
  
    this.addNode = function (node) {
      node.setParentNode(this);
      this.children[this.children.length] = node;
    };
  
    this.getChildren = function () {
      return this.children;
    };
  
    this.removeChildren = function () {
      this.children = [];
    };
  }
  
  const root = new TreeNode(1);
  root.addNode(new TreeNode(2));
  root.addNode(new TreeNode(3));
  
  const children = root.getChildren();
  for (let i = 0; i < children.length; i++) {
    for (let j = 0; j < 5; j++) {
      children[i].addNode(new TreeNode("second level child " + j));
    }
  }
  
  console.log(root);
  children[0].removeChildren();
  console.log(root);
  console.log(root.getParentNode());
  console.log(children[1].getParentNode());