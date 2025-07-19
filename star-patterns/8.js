/*

1
10
101
1010
10101
101010

*/

const printPattern = (n) => {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            if (j % 2 === 0) {
                row = row + 1;
            } else {
                row = row + 0;
            }
        }
        console.log(row);
    }
};
printPattern(5);

const printPattern2 = (n) => {
    for (let i = 0; i < n; i++) {
        let row = "";
        let num = 1;
        for (let j = 0; j <= i; j++) {
            row = row + num;
            if (num === 0) {
                num = 1;
            } else {
                num = 0;
            }
        }
        console.log(row);
    }
};
printPattern2(5);
