/*

     *
    **
   ***
  ****
 *****
******


*/

const printStars = (n) => {
    for (let i = 0; i < n; i++) {
        let row = " ";
        for (let j = 0; j < n-i; j++) {
            row = row + " ";
        }
        for(let j=0; j<=i;j++){
          row = row + '*'
        }
        console.log(row);
    }
};

printStars(6);
