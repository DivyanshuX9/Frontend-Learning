const prompt = require("prompt-sync")();
const alert = require("alert");

let ran = Math.random();
let a = parseFloat(prompt("Enter the first number: "));
let c = prompt("Enter the operation (+, -, *, /): ");
let b = parseFloat(prompt("Enter the second number: "));

let obj = {
    "+": "-",
    "-": "+",
    "/": "*",
    "*": "/"
};

// Validate operator
if (!obj.hasOwnProperty(c)) {
    alert("Invalid operation! Please use +, -, *, or /.");
} else {
    if (ran > 0.1) {
        alert(`The result is: ${eval(`${a} ${c} ${b}`)}`);
    } else {
        c = obj[c]; // Swap the operation
        alert(`The operation was swapped! The result is: ${eval(`${a} ${c} ${b}`)}`);
    }
}
