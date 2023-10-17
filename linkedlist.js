class  Node{
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
    if(!this.head) return this.head = newNode
    this.tail.next = newNode
    this.tail = newNode
    this.length++
 }

 pop(){
    if(!this.head) return undefined
    
    let prev =  this.head
    let temp = this.head
    while(temp.next){
        prev = temp
        temp = temp.next
    }
    this.tail = prev
    this.tail.next = null
    this.length--
    if(this.length === 0) {
        this.head = null
        this.tail = null
    }
   
    return this
 }

 unshift(value){

    const newNode = new Node(value)
    if(!this.head ){
        this.head = newNode
        this.tail = newNode
        return this
    }

    newNode.next = this.head
    this.head = newNode
     this.length ++
    return this


 }

 shift(){
    if(!this.head)return null
    if(this.length === 1){
        this.head = null 
        this.tail  = null
        return this
    }
    let prev = this.head
    this.head = this.head.next
    prev.next = null
    this.length --
    return this

 }

 get(index){
    if(index < 0 || index > this.length ) return undefined
    let temp = this.head
    for(let i = 0 ; i < index ; i++ ) {
        temp = temp.next
    }
    return temp
 }

set(index,values){
    console.log(values);
    let temp = this.get(index)
    console.log(temp.value);
    if(temp){
        temp = values
        return true
    }
    return false
    } 

    insert(index,value){
        if(index < 0 || this.index > this.length ) return undefined
        if(index === 0 ) return this.unshift(value)
        if(index ===  this.length )  return this.push(value)

        const newNode = new Node(value)
        let temp = this.get(index-1)
        newNode.next = temp.next
        temp.next  = newNode.next
        this.length ++
        return true

    }

}

const linklist = new LinkedList(10)
linklist.push(5)
linklist.push(12)
linklist.push(17)
linklist.push(43)
linklist.pop()
linklist.unshift(15)
linklist.shift()
console.log(linklist.insert(3,23));

console.log(linklist);