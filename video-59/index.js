let num1 = Number(prompt("Enter your number"));
let num2 = Number(prompt("Enter your number"));

let operator = prompt("Enter operator (+, -, *, /)");

if (Math.random() < 0.1) {

    // Faulty calculator — 10% chance

    if (operator === "+") {
        console.log(num1 - num2);
    } else if (operator === "*") {
        console.log(num1 + num2);
    } else if (operator === "-") {
        console.log(num1 / num2);
    } else if (operator === "/") {
        console.log(num1 ** num2);
    }

} else {

    // Normal calculator — 90% chance

    if (operator === "+") {
        console.log(num1 + num2);
    } else if (operator === "-") {
        console.log(num1 - num2);
    } else if (operator === "*") {
        console.log(num1 * num2);
    } else if (operator === "/") {
        console.log(num1 / num2);
    }
}