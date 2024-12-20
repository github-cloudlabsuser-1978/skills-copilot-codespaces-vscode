class Calculator {
    constructor() {
        this.currentValue = 0;
    }

    add(value) {
        this.currentValue += value;
        return this.currentValue;
    }

    subtract(value) {
        this.currentValue -= value;
        return this.currentValue;
    }

    multiply(value) {
        this.currentValue *= value;
        return this.currentValue;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.currentValue /= value;
        return this.currentValue;
    }

    clear() {
        this.currentValue = 0;
        return this.currentValue;
    }
}

// Example usage:
const calculator = new Calculator();

console.log(calculator.add(10));       // 10
console.log(calculator.subtract(4));   // 6
console.log(calculator.multiply(3));   // 18
console.log(calculator.divide(2));     // 9
console.log(calculator.clear());       // 0