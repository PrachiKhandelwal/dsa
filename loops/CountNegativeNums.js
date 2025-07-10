/*
Write a function that returns number of negative numbers in an array
*/

const noOfNegativeNums = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
};

const res = noOfNegativeNums([6, 9, 12, -7, 4, 0, 34, -4, 1, -1]);
console.log(res);
