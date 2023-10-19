class Node {
    constructor(value){
        this.value  = value
        this.next  = null
    }
}

class Stack{
    constructor(value){
        const newNode = new Node (value)
        this.top = newNode
        this.length = 1
    }

    push(value){
        const newNode = new Node(value)
        if(!this.top) {this.top = newNode}else{
            newNode.next = this.top
            this.top = newNode
            
        } 
        this.length++ 
        return this

    }

    pop(){
        if(!this.top ) return undefined
        let prev = this.top
        this.top = this.top.next
        prev.next = null 

      
    }

}

const stack = new Stack(1)
stack.push(12) 
stack.push(13)
stack.push(16)
stack.push(10)
console.log(stack);