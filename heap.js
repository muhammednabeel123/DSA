class Heap  {
    constructor(){
        this.heap = []
    }

    minheap(arr){
        this.buidheap(arr)
    }
    buidheap(arr){
        for(let i = this.parent(this.heap-1) ; i > 0  ; i--  ){
            this.shiftdown(i)
        }
    }
    shiftdown(curr){
        let endIndex  = this.heap.length-1
        let left = this.leftChild(curr)
        while(endIndex >= left){
            let right = this.rightChild(curr)
            let shifttobe 
            if(right <= endIndex && this.heap[right] < this.heap[left]){
                shifttobe = right
            }else{
                shifttobe = left
            }
            if(this.heap[curr] > this.heap[shifttobe] ){
                [this.heap[curr],this.heap[shifttobe]] =  [this.heap[shifttobe],this.heap[current]];
                curr = shifttobe
                left = this.leftChild(curr)
            }
            return
        }
    }

    shiftup(curr){
        let parent = this.parent(curr)
       
    }

    parent(curr){
        return Math.floor((i-1)/2)
    }
    leftChild(curr){
        return Math.floor((i * 2) +1 )
    }
    rightChild(curr){
        return Math.floor((i * 2) + 2)
    }
}