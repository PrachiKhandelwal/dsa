const findThirdLargestNum=(arr)=>{
    if(arr.length < 3){
        return null
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let thirdLargest = -Infinity;
    for(let i=0; i<arr.length;  i++){
        if(arr[i] === largest || arr[i] === secondLargest || arr[i]=== thirdLargest){
            continue;
        }
        if(arr[i] > largest){
            thirdLargest = secondLargest;
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i] > secondLargest && arr[i] < largest){
            thirdLargest = secondLargest;
            secondLargest = arr[i];
        }
        else if(arr[i] > thirdLargest && arr[i] < secondLargest){
            thirdLargest = arr[i];
        }
    }
    return thirdLargest !== -Infinity ? thirdLargest : null
}

console.log(findThirdLargestNum([10, 20, 30]));      // 10
console.log(findThirdLargestNum([10, 10, 10]));      // null
console.log(findThirdLargestNum([50, 30, 50, 40]));  // 30
console.log(findThirdLargestNum([1, 2]));            // null
console.log(findThirdLargestNum([-10, -20, -30]));   // -30
