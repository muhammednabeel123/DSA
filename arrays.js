let arr = [[2, 8, 4], [3, 7, 6], [9, 5, 4]];
let result = [];
let sum = 0; 
for (let i = 0; i < arr.length; i++) {
  
  for (let j = 0; j < arr.length ; j++) {
  
    sum += arr[j][i];
  }
 
  result.push(sum);
  sum = 0
}

console.log(result);