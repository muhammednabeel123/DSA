class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addvertex(vertex){
        this.adjacencyList[vertex] = new Set()

    }

    addEdge(v1,v2){
        this.adjacencyList[v1].add(v1)
        this.adjacencyList[v2].add(v2)
    }

    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v != v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v != v1)
    }

    removeVertex(v1){
        while(this.adjacencyList[v1].length){
            let temp = this.adjacencyList[v1].pop()
            this.removeEdge(temp,v1)
        }
    }

    dfs(start){
        let stack = [start]
        let result = []
        let visited = {}
        let curr 
        visited[start] = true
        while(queue.length){
            curr = stack.pop()
            result.push(curr)
            this.adjacencyList[curr].filter(element =>{
                if(!this.visited[element]){
                    visited[element] = true
                    stack.push(element)
                }
            })
        }
        return result
    }

    bfs(start){
        let queue = [start]
        let visited = {}
        let result = []
        let curr 
        visited[queue] = true
        while(queue.length){
            let curr = queue.shift()
            result.push(curr)
            this.adjacencyList[curr].forEach(element => {
                if(!this.visited[element]){
                    visited[element] = true
                    queue.push(element)
                }
            });
        }
        return result
    }
  
}

let arr = [1,4,2,34,23,]

largest = arr[0]
secondLargest = arr[0]

for(let i = 0 ; i <arr.length ; i++  ){
    if(arr[i] > largest){
        secondLargest = largest
        largest = arr[i]
    }

    if(arr[i] < largest && arr[i] > secondLargest ){
        secondLargest = arr[i]
    }

}

 function isPalidrome(arr){

let start = 0
let end = arr.length-1
if( arr[start] !== arr[end] ){
    return false
}
    start++
    end--
   return true




}
console.log(isPalidrome("meekanam"));
 console.log(secondLargest);