function Node(val){
    this.value = val;
    this.next = null;
}

function LinkedList(){
    this.head = null;
    this.size=0;
}

LinkedList.prototype.getFromHead = function(){
    // if LL is empty
    if(this.isEmpty()){
        return -1;
    }
    // if LL  is non empty
    return this.head.value;
}

LinkedList.prototype.getFromTail = function (){
    // if LL is empty
    if(this.isEmpty()){
        return -1;
    }
    // if  LL has only 1 element
    if(!this.head.next){
        return this.getFromHead();
    }
    // if LL has more than 1 elements
    let cur = this.head;
    while(cur.next !==  null){
        cur = cur.next;
    }
    return cur.value;
}

LinkedList.prototype.getFromIndex = function (idx){
    // invalid index
    if(idx < 0 || idx >= this.size){
        return -1;
    }
    // valid index
    let cur = this.head; 
    // cur should  eventually point to ith index
    for(let i=0 ; i<idx; i++){
        cur = cur.next;
    }
    return cur.value;
}

LinkedList.prototype.addAtHead = function(val){
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
}

LinkedList.prototype.addAtTail = function (val){
    const newNode = new Node(val);
    //handle when no of elems =0
    if(this.isEmpty()){
        this.head = newNode;
    }
    else{
        let cur = this.head;
        while(cur.next !== null){
            cur = cur.next;
        }
        cur.next = newNode;
    }
    this.size++;
}

LinkedList.prototype.addAtIndex = function (idx,val){
    if(idx < 0 || idx > this.size){
        return;
    }
    if(idx === 0){
        this.addAtHead(val);
        return;
    }
    else  if(idx === this.size){
        this.addAtTail(val);
        return;
    }
    const newNode = new Node(val);
    let cur = this.head;
    for(let i=0 ; i<idx - 1; i++){
        cur = cur.next;
    }
    newNode.next = cur.next;
    cur.next = newNode;
    this.size++;
}

LinkedList.prototype.deleteFromHead = function (){
    if(this.isEmpty()){
        return;
    }
    this.head = this.head.next;
    this.size--;
}

LinkedList.prototype.deleteFromTail = function (){
    if(this.isEmpty()){
        return;
    }
    // if LL has only 1 element
    if(!this.head.next){
        this.deleteFromHead();
        return;
    }
    // if LL has more than 1 element
    let cur=this.head;
    while(cur.next && cur.next.next !== null){
        cur = cur.next;
    }
    cur.next = null;
    this.size--;
}

LinkedList.prototype.deleteFromIndex = function (idx){
    // if given index is invalid
    if(idx < 0 || idx >= this.size){
        return;
    }
    if(idx === 0){
        this.deleteFromHead();
        return;
    }
    else if(idx === this.size - 1){
        this.deleteFromTail();
        return;
    }
    let cur = this.head;
    for(let i=0; i<idx -1; i++){
        cur = cur.next;
    }
    cur.next = (cur.next).next;
    this.size--;   
}

LinkedList.prototype.isEmpty =  function(){
    if(this.head === null){
         return true;
    }
    return false;
}

LinkedList.prototype.print = function(){
    if(this.isEmpty()){
        console.log('Linked List is empty');
        return;
    }
    let cur = this.head;
    let res = [];
    while(cur !== null){
        res.push(cur.value);
        cur=cur.next;
    }
    console.log(res.join(' -> '));
} 

const LL = new LinkedList();
LL.print();
LL.addAtHead(4);
LL.addAtHead(7);
LL.addAtIndex(1,3);
LL.deleteFromIndex(2);
LL.print();
console.log(LL.getFromIndex(1));