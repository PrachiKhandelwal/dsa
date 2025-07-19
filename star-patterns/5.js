/*

12345
1234
123
12
1

*/

const printPattern = (n) => {
    for (let i = n; i > 0; i--) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row = row + (j + 1);
        }
        console.log(row);
    }
};
printPattern(5);

const printPattern2 = (n) => {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (j = 0; j < n - i; j++) {
            row = row + (j + 1);
        }
        console.log(row);
    }
};
printPattern2(5);
