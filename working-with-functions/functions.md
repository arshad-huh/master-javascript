# Functions
- Functions are fundamental building blocks in JavaScript. They are reusable blocks of code that perform a specific task.
- **Parameters:** Variables defined within the function's parentheses.
- **Arguments:** Values passed to the function when it's called.
- **Return Statement:**
  - The return statement specifies the value that the function should output.
  - If no return statement is used, the function implicitly returns undefined.
- **Default Parameters (ES6):**
```JavaScript
function divide(a, b = 1) { 
  return a / b; 
}
divide(10); // Output: 10 (b defaults to 1)
```
- **Rest Parameter (ES6):**
  - Collect an indefinite number of arguments into an array
```javascript
function sum(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}
sum(1, 2, 3, 4); // Output: 10
```

## Functions Declaration
- Declared using the function keyword followed by the function name, parameters in parentheses, and the function body within curly braces.
- Can be called before they are declared (hoisted).

```javascript
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function with multiple parameters
function add(a, b) {
  return a + b;
}
```

## Arrow Functions (ES6)
- Concise syntax for writing functions, especially useful for short functions.
- `=>` is the arrow symbol.
```javascript
// Concise syntax
const multiply = (a, b) => a * b;

// With multiple parameters
const sum = (a, b) => {
  return a + b;
};

// No parameters
const sayHello = () => "Hello, World!";
```

## Function Expressions
- A function assigned to a variable.
- Can be anonymous (no name).
  
```javascript
// Assigned to a variable
const divide = function(a, b) {
  return a / b;
};

// Anonymous function as an argument
setTimeout(function() {
  console.log("Delayed execution");
}, 1000);
```

## IIFE (Immediately Invoked Function Expressions)
```javascript
// Creates a private scope
(function() {
  let privateVar = "I'm private";
  console.log(privateVar);
})();
// Executed immediately after it is defined.
```

## Functions as First Class Citizens
- In JS, functions are FIrst Class Citizens:
  - Assigned to variables: Just like any other value (e.g., numbers, strings).
  - Passed as arguments to other functions: This is the core of higher-order functions.
  - Returned as the result of a function: Allowing for dynamic function creation.
- This flexibility is a key feature of functional programming paradigms and enables powerful techniques like closures and higher-order functions.


## Common Use Cases
- **Callbacks:** Functions passed as arguments to other functions (e.g., array.forEach(), array.map(), array.filter()).
- **Event Listeners:** Functions executed when a specific event occurs (e.g., button click).
- **Creating Reusable Code:** Encapsulate logic for better organization and maintainability.