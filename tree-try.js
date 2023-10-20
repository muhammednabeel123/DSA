class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}

class Bst{
    constructor(){
        this.root = null
    }
    insert(value){
        const newNode = new Node(value)
       if(this.root === null){
        this.root = newNode
       }else{
        this.insertNode(root,newNode)
       }
    }

    insertNode(root,newNode){
        if(newNode.value < root){
            if(root.left === null ){
                root.left = newNode
            }else{
                this.insertNode(root.left ,newNode)
            }
        }else{
            if(root.right === null ){
                root.left = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    search(root,target){
        if(root.value === target){
            return true
        }else if( target < root.value  ){
          return  this.search(root.left,target )
        }else{
            return this.search(root.right,target)
        }
    
    }

    bfs(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            if(curr.left){
                queue.push(curr.left)
            }else{
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }
        return this.min(root.left)
    }
}