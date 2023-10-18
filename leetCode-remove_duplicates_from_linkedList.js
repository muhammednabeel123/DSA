class Node{
    constructor(value){
        this.value = value
        this.next = null
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
        if(!this.head)return this.head = newNode ; this.tail = newNode
        let current = this.head
        while(current.next !== null){
            current = current.next
        }
        current.next = newNode
        this.length++
    }

    removeDuplicates(){
        const values = new Set()
        let current = this.head
        let prev  = null 
        while(current !== null){
            if(values.has(current.value)){
                prev.next = current.next
                this.length -= 1
            }else{
                values.add(current.value)
                prev = current
            }

            current = current.next
        }
   
    }
    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
    getLen(){
        return console.log(this.length)
    }

}

const linklist = new LinkedList()
linklist.push(10)
linklist.push(20)
linklist.push(10)
linklist.push(10)
linklist.printList()
linklist.getLen()
linklist.removeDuplicates()

linklist.printList()