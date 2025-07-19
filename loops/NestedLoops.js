// if we want to run inner loop i times, we can make inner loop run from 0 to less than i
//M1
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < i; j++) {
        process.stdout.write("*");
    }
    console.log("\n");
}

//M2
for (let i = 0; i < 6; i++) {
    for (let j = i; j > 0; j--) {
        console.log(i, j);
    }
}

// if we want  to run inner loop i+1 times, we can make inner loop run from 0 to i
//M1
for (let i = 0; i < 5; i++) {
    for (j = 0; j <= i; j++) {  //or we can do (j=0; j<i+1; j++)
        process.stdout.write("*");
    }
    console.log("\n");
}

//M2
for (let i = 0; i < 5; i++) {
    for (let j = i; j >= 0; j--) {
        console.log(i, j);
    }
}
console.log("reverse loops...");
//reverse loop
for (let i = 5; i > 0; i--) {
    for (j = 0; j < i; j++) {
        console.log(i, j);
    }
}
