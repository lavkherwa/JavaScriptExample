class Node{
  constructor(value){
    this.value = value;
    this.nextNode = null;
  }
}

class Queue{
  constructor(){
    this.front = this.back = null;
  }

  isEmpty(){
    return !this.front;
  }

  enqueue(value){
    let node = new Node(value);

    if(this.isEmpty()){
        /* if empty both front and back is same */
        this.front = this.back = node;
    }else{
      /* Put back next node to current */
      this.back.nextNode = node;
      /* Put back node to current node */
      this.back = node;
    }
  }

  dequeue(){
    let node = this.front;

    if(!this.isEmpty()){
      this.front = this.front.nextNode;
    }

    if(!this.front){
      this.back = null;
    }

    return node.value;
  }
}

/*
[3]
[2]
[1]
*/
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("First item dequed is: " + queue.dequeue());
console.log("Second item dequed is: " + queue.dequeue());
