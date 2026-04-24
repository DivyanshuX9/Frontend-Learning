const prompt = require("prompt-sync")();

let a=prompt("a number")
a=parseInt(a,10);
let element=1;
for (let index = 1; index <= a; index++) {
     element=element*index;
}


function factorial(number) {
    if (number === 0) return 1; // Factorial of 0 is defined as 1
    let arr = Array.from(Array(number + 1).keys());
    let c = arr.slice(1).reduce((a, b) => a * b);
    return c;
}


console.log(factorial(a)) ;