/*
Write a function to find the second largest element in an array
*/

const findSecondLargest = (arr) => {
    if (arr.length < 2) {
        return null;
    }
    let largest, secondLargest;
    if (arr[0] > arr[1]) {
        largest = arr[0];
        secondLargest = arr[1];
    } else {
        largest = arr[1];
        secondLargest = arr[0];
    }
    if (arr.length === 2) {
        return secondLargest;
    }
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
};

const res = findSecondLargest([6, 9, 12, -7, 4, 0, -4, 1, -1, 10]);
console.log(res);

// Approach 2 - Handles duplicate values
const getSecondLargest = (arr) => {
    if (arr.length < 2) {
        return null;
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            //arr[i] < largest condition to handle array containing duplicate values [2,4,4]
            secondLargest = arr[i];
        }
    }
    return secondLargest === -Infinity ? null : secondLargest;
};

const result = getSecondLargest([2, 4, 4]);
console.log(result);


/**
 * CORNER CASES:
 * 1. array is empty
 * 2. array has negative numbers
 * 3. array has duplicates
 */