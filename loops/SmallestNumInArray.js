const getSmallestNum = (arr) => {
    if (arr.length === 1) {
        return arr[0];
    }
    let smallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (smallest > arr[i]) {
            smallest = arr[i];
        }
    }
    return smallest;
};
const res = getSmallestNum([6, 9, 12, -7, 4, 0, -4, 1, -1]);
console.log(res);
