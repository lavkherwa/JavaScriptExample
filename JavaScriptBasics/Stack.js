class Node{
  constructor(value, nextNode){
    this.value = value;
    this.nextNode = nextNode;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  push(value){
    let node = new Node(value, this.top);
    this.top = node;
  }

  pop(){
    let value = null;
    if(this.top){
      value = this.top.value;
      this.top = this.top.nextNode;
    }
    return value;
  }
}

/*
[3]
[2]
[1]
*/
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log("First item poped is: " + stack.pop());
console.log("Second item poped is: " + stack.pop());
