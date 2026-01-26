// Calculate Function
function calculate(a, b, operation){
    switch(operation){

        case 'add':
            return a + b;

        case 'subtract':
            return a - b;

        case 'multiply':
            return a * b;

        case 'divide':
            if(b === 0) return "Cannot divide by zero";
            return a / b

        default:
            return "Invalid operation"
        
    }
}

console.log(calculate(7, 2, "add"));      // 9
console.log(calculate(7, 2, "subtract")); // 5
console.log(calculate(7, 2, "multiply")); // 14
console.log(calculate(7, 2, "divide"));   // 3.5
