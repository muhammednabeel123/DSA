class HashTable {
    constructor(size){
        this.table  = new Array(size)
        this.size = size
    }

    _hash(key){
        let total = 0
        for(let i = 0 ; i < key.length; i++ ){
            total += key.charCodeAt(i)
        }

        return total % this.size 
    }

    set(key,value){
        let index = this._hash(key)
        let bucket  = this.table[index]
        if(!bucket){
            bucket = [[key,value]]
        }else{
            const sameKeyItem = bucket.find(item => item[0] === key) 
            if(sameKeyItem){
                sameKeyItem[1] = value
            }else{
                bucket.push([key,value])
            }
        }
        
        
    }
}

const hash = new HashTable(5)
hash.set("213","nabeel")
hash.set("mane","nabeel")