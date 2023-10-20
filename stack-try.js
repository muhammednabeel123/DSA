class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class stack {
     constructor(value){
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
     }

     push(value){
        const newNode = new Node(value)
        if(top === null ){
            this.top = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
           
        }
        this.length ++
        return this
     }

     pop(){
        if(!this.head ) return null
        let prev = this.top
        this.top.next = this.top
        prev.next = null
     }



}

class Queue{

    constructor(value){
        const newNode = new Node(value)
        this.first = newNode
        this.last = newNode
    }

    enqueu(value){
        const newNode = new Node(value)
        if(!this.First ){
            this.first = newNode
            this.last = newNode
        }
        this.last.next = newNode
        this.last = newNode
    }

    deque(){
        let temp = this.first
         this.first.next = this.first
         temp.next  = null

    }

}