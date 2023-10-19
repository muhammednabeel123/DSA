let arr = [[1, 2, 3], [3, 2, 3], [3, 8, 6]];



function subArray(arr) {
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i][1];
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                sum += arr[j][1];
            }
        }
        output.push(sum);
    }

    console.log(output);
}



subArray(arr);
