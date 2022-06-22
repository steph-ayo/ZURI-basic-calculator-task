let first = prompt("Enter first number")
let second = prompt("Enter second number")
let operation = prompt ("Enter your preferred mode of operation :" + "+, -, *, /")
let signSum = "+"
let signSubtact = "-"
let signMultiply = "*"
let signDivivde = "/"

const sum = Number(first) + Number(second);
const subtract = Number(first) - Number(second);
const multiply = Number(first) * Number(second);
const divide = Number(first) / Number(second);

function solve(sum,subtract,multiply,divide) {
    if(operation === signSum) {
        alert(sum);
    } else if(operation === signSubtact) {
        alert(subtract);
    } else if (operation === signMultiply) {
        alert(multiply);
    } else {
        alert(divide);
    }
};
 
solve(sum,subtract,multiply,divide); 


