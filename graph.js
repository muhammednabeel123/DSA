class Graph {
    constructor(){
        this.adjacencyList  = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set() 
        }
    }

    addEdge(v1,v2){
        if(!this.adjacencyList[v1]){
            this.addVertex(v1)
        }

        if(!this.adjacencyList[v2]){
            this.addVertex(v2)
        }

        this.adjacencyList[v1].add(v2)
        this.adjacencyList[v2].add(v1)

    }
    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v =>   v !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1) 
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length   ){
            let temp = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex,temp)
        }
        delete this.adjacencyList[vertex]
    }

    dfs(start){
        let stack = [start]
        let visited = {}
        let result = []
        let curr 
        visited[start]  = true

        while(stack.length){
            curr = stack.pop()
            result.push(curr)
            this.adjacencyList[curr].forEach(element => {
                if(!visited[element]){
                    visited[element] = true
                    stack.push(element)
                }
                
            });
        }
        return result

    }

    bfs(start){
        let queue = [start]
        let result = []
        let visited = {}
        let curr

        visited[start] = true

        while(queue.length){
            curr = queue.shift()
            result.push(curr)

            this.adjacencyList[curr].forEach(element =>{ 
                if(!visited[element]){
                    visited[element] = true
                    queue.shift()
                }
             })
        }
        return result

    }

    
}

