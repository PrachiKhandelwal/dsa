//Find number of digits in a given number

const numOfDigits = (num) => {
    //bcz Math.floor(-0.680125) = -1, so this will become infinite loop, hence making the number positive
    num = Math.abs(num);
    //to handle floating point numbers like 0.0000000001
    num = Math.floor(num);
    if (num === 0) {
        //edge case
        return 1;
    }
    let count = 0;
    while (num !== 0) {
        count++;
        num = Math.floor(num / 10);
    }
    return count;
};
const res = numOfDigits(-680125);
console.log(res);
console.log(numOfDigits(0.0000000001));
