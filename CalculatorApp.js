function calculator( num1, num2, operator) {
    if (operator === "+") {
        return (num1 + num2)
    }
    if (operator === "-") {
        return (num1 - num2)
    }
    if (operator === " * ") {
        return (num1 * num2)
    }
    if (operator === "/") {
        return (num1 / num2)
    }
} 

let substraction = calculator (56,89, "-" )
console.log (substraction)