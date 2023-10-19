function bubbleSort(arr){
    for(let i = arr.length ; i > 0 ; i-- ){
        for(let j = 0 ; j < i ; j++){
           if(arr[j] > arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
           }
        }
    }
    return arr
}

function selectionSort(arr){
    let min 
    for(let i = 0 ; i < arr.length-1 ; i++){
        min = i
        for(let j = i + 1 ; j < arr.length ; j++){
            if( arr[j] < arr[min] ) min = j
        }

        if(  i !== min ){
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }

    }
    return arr
}

function insertionSort(arr){
 let temp 
    for(let i = 1 ; i< arr.length ; i++){
        temp = arr[i]
       for( var j = i-1 ;  arr[j] < temp && j > 0 ; j-- ){
        arr[j + 1] = arr[j]
       }
       arr[j] = temp
    }
    return arr
}

function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }

    let middle = Math.floor((arr.length)/2)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)

    return merge(mergeSort(left),mergeSort(right))



}

function merge(left ,right){
    let sortedarr = []
    while(right.length && left.length){
        if(left[0] < right[0] ){
            sortedarr.push(left.shift())
        }else{
            sortedarr.push(right.shift())
        }
    }
    return[...sortedarr,...left,...right]
}

function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    for(let i = 0 ; i< arr.length-1 ; i++){
        if(pivot > arr[i]){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return[...quickSort(left),pivot,...quickSort(right) ]


}


console.log(quickSort([4,2,12,43,43,54]));