class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size  = size

    }

    _hash(key){
        let total = 0
        for(let i = 0 ; i < key.length ; i++ ){
            total += key.charCodeAt(i) 
        }
        return total % this.size
    }

    set(key,value){
        let index = this._hash(key)
        this.table[index] = value
    }

    get(key){
        let index = this._hash(key)
        return this.table[index]
    }
    display(){
        for(let i = 0 ; i < this.table.length ; i++){
            if(this.table[i]){
                console.log(this.table[i]);
            }
        }
    }
}

const hash  =  new HashTable(5)
hash.set("@13","213123")
hash.set("@1312","213121323")
hash.display()
