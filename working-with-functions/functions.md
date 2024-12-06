## Functions

#### Regular Functions
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

#### Arrow Functions
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

#### Function Expressions
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

#### IIFE (Immediately Invoked Function Expressions)
```javascript
// Creates a private scope
(function() {
  let privateVar = "I'm private";
  console.log(privateVar);
})();
```
### Rest Parameters and Spread Operator
```javascript
// Rest parameters: Collect multiple arguments
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Spread operator: Expand array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Combining objects
const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }
```