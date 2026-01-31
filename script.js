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
app.use(express.static("public"));

// Root route
app.get("/", (req, res) =>{
    res.send("calculator is running")
});

// Calculator route (calculate)
app.get("/calculate", (req, res) => {
    const {a, b, operation} = req.query;

    const numA = Number(a);
    const numB = Number(b);

    if (isNaN(numA) || isNan(numB)) {
        return res.send("Please provide valid numbers");
        
    }

    const result = calculate(numA, numB, operation);
    res.send(`Result: ${result}`);


});

// Start server
app.listen(PORT, () =>{
    console.log(`calculator running on http://localhost:${PORT}`);
});
