class Stack{
    constructor(){ this.items = [] }

    push(value){
        this.items.push(value)
    }
    pop(){
        this.items.pop()
    }
    print(){
        console.log(this.items);
    }
}

const stack =  new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()
stack.print()