/*

1
12
123
1234
12345

*/

const printPattern = (n) => {
    for (let i = 0; i < n; i++) {
        row = "";
        for (let j = 0; j <= i; j++) {
            let num = j + 1;
            row = row + num;
        }
        console.log(row);
    }
};

printPattern(5);
