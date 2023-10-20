class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.tail = newNode 
            this.head = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    pop(){
        if(!this.head){
            return undefined
        }
        let prev = this.head    
        let temp = this.head

        while(temp){
            prev = temp
            temp = temp.next
        }

        prev = this.tail
        this.tail.next = null
        this.length--



        
    }

    unshift(value){
        const newNode = new Node(value)
        if(!this.head ){
            this.tail = newNode
            this.head = newNode
        }else{
            
            newNode.next = this.head
            this.head = newNode


        }
    }

    get(index){
        let temp = this.head
        for(let i = 0 ; i < index ; i++ ){
            temp = temp.next
        }

        return temp
    }

    remove(index){
        
     
        let before = this.get(index - 1 )
        let temp = before.next
        before.next = temp.next
        temp.next = null
        this.length--
        
         
    }

    reverse(){

            let temp = this.head
            this.head = this.tail
            this.tail = temp
            let prev = null

           for(let i = 0 ; i < this.length ;  i++ ){
                next = temp.next
                temp.next = prev
                prev = temp
                temp = next

           }

    }

    
}


const l = new LinkedList(6)
l.push(5)
l.push(7)
l.push(8)
l.unshift(10)
console.log(l.get(7));

