/*

1
22
333
4444
55555

*/

const printPattern = (n) => {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (j = 0; j <= i; j++) {
            row = row + (i + 1);
        }
        console.log(row);
    }
};
printPattern(5);
