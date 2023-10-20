class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    _hash(key){
        let total  = ""
        for(let i = 0 ; i < key.length ; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){

        let index = this._hash(key)
        let bucket = this.table[index]
        if(!bucket){
            bucket = [[key,value]]
        }else{
            let sameKeyItem = bucket.find(item => item[0] === key )
            if(sameKeyItem){
                sameKeyItem[1] = value
            }else{
                bucket.push([key,value])
            }
        }
        if(index){
            this.table[index] = value
        }
    }

    get(key){
        let index = this._hash(key)
        if(index){
            return this.table[index]
        }
    }

}