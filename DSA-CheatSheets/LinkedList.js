function LinkedListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  class MyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    prepend(newVal) {
      const currentHead = this.head;
      const newNode = new LinkedListNode(newVal);
      newNode.next = currentHead;
      this.head = newNode;
  
      if (!this.tail) {
        this.tail = newNode;
      }
    }
  
    append(newVal) {
      const newNode = new LinkedListNode(newVal);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  }
  
  var linkedList1 = new MyLinkedList();
  linkedList1.prepend(25);
  linkedList1.prepend(15);
  linkedList1.prepend(5);
  linkedList1.prepend(9); 
  console.log(linkedList1);