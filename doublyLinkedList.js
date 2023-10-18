class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LinkedList {

    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    push(value){
        const newNode = new Node(value)
        if(!this.head) return this.head = newNode ; this.tail = newNode
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
            this.length++
            return this
    }   
}
const linklist = new LinkedList(10)
linklist.push(11)

console.log(linklist.push(12));