class  Node{
    constructor(char){
        this.char = char
        this.child = {}
        this.isword = false
    }
}
class Trie{
    constructor(){
        this.root = ""
    }

    insert(word){
        let current = this.root
        for(let i = 0 ; i< word.length ; i++){
            let char = word[i]
            if(!current.child[char]){
                current.child[char] = new Node(char) 
            }
            current = current.child[char]
        }

        current.isword = true
        return this.root

    }
   
}