class Node{
constructor(value){
    this.value = value
    this.left = null
    this.right = null
}
}

class BST {
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
           this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value < root.value ){
            if( root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }

        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    search(root,value){ 
       
        if(root.value === value){
            return true
        }else if(value < root.value){
           return this.search(root.left,value)
        }else{
           return this.search(root.right,value)
        } 
 
        
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)

        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.inOrder(root.left)
            this.inOrder(root.right)
            console.log(root.value);
        }
    }

    Bfs(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }

    }


}

const bst = new BST()
bst.insert(10)
bst.insert(20)
bst.insert(5)
bst.insert(3)
bst.insert(70)
bst.insert(100)
bst.Bfs()
console.log(bst.search(bst.root,10));

bst.postOrder(bst.root)
console.log(bst);
