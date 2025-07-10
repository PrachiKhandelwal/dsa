/*
Write a function to find largest number in an array
*/

const getLargestNum = (arr) => {
    if (arr.length === 1) {
        return arr[0];
    }
    let largestNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }
    return largestNum;
};

const res = getLargestNum([6, 9, 12, -7, 4, 0, -4, 1, -1]);
console.log(res);
