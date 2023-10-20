function bubbleSort(arr){

    for(let i = arr.length ; i > 0 ; i-- ){
        for(let j = 0 ; j < i ; j++ ){
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
    for(let i = 0 ; i <arr.length ; i++){
        min = i

        for(let j = i+1 ; j <arr.length ; j++){
            if(arr[min] > arr[j] )min = j
        }

        if(min !== i){
            let temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp
        }
    }
    return arr
}

function insertionSort(arr){
    let temp
    for(let i = 1 ; i < arr.length ; i++ ){
        temp = a[i]

        for(j = i-1 ; j>0 && a[j] > temp ; j--  ){
            a[j+1] = a[j]
        }

        a[j+1] = temp

    }
    return arr
}

function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }

    let mid = Math.floor((arr.length)/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    return  merge(mergeSort(left),mergeSort(right))

}

function merge(left,right){
    let sortedarr = []

    while(left.length && left.length){
        if(left[0] < right[0] ){
            sortedarr.push(left.shift())
        }else{
            sortedarr.push(right.shift())
        }
    }

    return [...sortedarr,...left,...right]
}

function quickSort(arr){
    if(arr.length < 2 ){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    for(let i =0 ; i<arr.length ; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return[...quickSort(left),pivot,quickSort(right)]


}


console.log(mergeSort([4,2,12,43,43,54]));