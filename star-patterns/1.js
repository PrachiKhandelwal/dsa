/*

****
****
****
****

*/

const printStar = (n) => {
    for (let i = 0; i < n; i++) {
        let row='';
        for (let j = 0; j < n; j++) {
            row  = row + '*'
        }
        //j is responsible  for column and i is responsibe for row
        console.log(row);
    }
};
printStar(4);
