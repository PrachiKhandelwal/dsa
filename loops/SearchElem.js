/**
Write a function that searches for an element in an array and  return its index. If the element is not present in the array, return -1.
 */

const searchItem = (item, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
            return i;
        }
    }
    return -1;
};

const nums = [1, 5, 78, 34, 0, 43];

const res = searchItem(78, nums);
console.log(res);

//using built-in method
console.log(nums.findIndex((elem) => elem === 78)); 