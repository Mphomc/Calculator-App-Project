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

// Import expect
const express = require('express');
const app = express();
const PORT = 300;

// Middleware
app.use(express.json());
