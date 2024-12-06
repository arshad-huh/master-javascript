# Advanced JavaScript Roadmap (Continued)

## 4. Working with Functions

### Function Basics

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

### Advanced Functional Programming Concepts

#### Higher-Order Functions
```javascript
// map: Transform array elements
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num ** 2);
// [1, 4, 9, 16]

// filter: Select array elements
const evenNumbers = numbers.filter(num => num % 2 === 0);
// [2, 4]

// reduce: Accumulate array values
const sum = numbers.reduce((acc, current) => acc + current, 0);
// 10

// find: Find first matching element
const firstEven = numbers.find(num => num % 2 === 0);
// 2

// some: Check if any element matches
const hasEven = numbers.some(num => num % 2 === 0);
// true

// every: Check if all elements match
const allPositive = numbers.every(num => num > 0);
// true

// findIndex: Find index of first matching element
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
// 1
```

#### Currying
```javascript
// Transform function with multiple arguments 
// into a sequence of functions
const curriedAdd = (a) => (b) => (c) => a + b + c;

const result = curriedAdd(1)(2)(3); // 6
```

#### Memoization
```javascript
// Cache function results to improve performance
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
};

const expensiveCalculation = memoize((n) => {
  console.log('Calculating...');
  return n * n;
});
```

#### Function Composition
```javascript
// Combine multiple functions
const compose = (f, g) => (x) => f(g(x));

const double = x => x * 2;
const increment = x => x + 1;

const doubleAndIncrement = compose(increment, double);
console.log(doubleAndIncrement(5)); // 11
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

### Error Handling

#### Try...Catch
```javascript
try {
  // Potentially risky code
  const result = riskyFunction();
} catch (error) {
  console.error('An error occurred:', error.message);
} finally {
  // Code that runs regardless of success or failure
  console.log('Cleanup');
}

// Throwing custom errors
function validateAge(age) {
  if (age < 0) {
    throw new Error('Age cannot be negative');
  }
  return age;
}
```

## 5. Working with Data Structures

### Arrays

#### Array Methods
```javascript
let fruits = ['apple', 'banana', 'cherry'];

// Adding/removing elements
fruits.push('date');     // Add to end
fruits.pop();            // Remove from end
fruits.unshift('grape'); // Add to beginning
fruits.shift();          // Remove from beginning

// Slicing and splicing
let citrus = ['orange', 'lemon'];
let allFruits = fruits.concat(citrus); // Combine arrays
let slicedFruits = fruits.slice(1, 3); // Extract portion
fruits.splice(1, 1, 'mango'); // Remove and/or add elements

// Iteration methods
fruits.forEach(fruit => console.log(fruit));
let uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());
let longFruits = fruits.filter(fruit => fruit.length > 5);
```

### Objects

#### Object Basics
```javascript
// Creating objects
let person = {
  name: "John",
  age: 30,
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

// Nested objects
let company = {
  name: "TechCorp",
  address: {
    street: "123 Tech Lane",
    city: "Silicon Valley"
  }
};

// Object methods
console.log(Object.keys(person));    // ["name", "age"]
console.log(Object.values(person));  // ["John", 30]
console.log(Object.entries(person)); // [["name", "John"], ["age", 30]]
```

### JSON
```javascript
// Parsing JSON
let jsonString = '{"name": "Alice", "age": 25}';
let parsedObject = JSON.parse(jsonString);

// Converting to JSON string
let user = { name: "Bob", age: 30 };
let jsonUser = JSON.stringify(user);
```

## 6. DOM Manipulation

### Selecting Elements
```javascript
// By ID
let element = document.getElementById('myElement');

// Query Selector
let firstDiv = document.querySelector('div');
let allDivs = document.querySelectorAll('div');

// Modifying elements
element.innerHTML = 'New content';
element.style.color = 'red';
element.classList.add('highlight');
```

### Event Handling
```javascript
// Adding event listeners
let button = document.querySelector('#myButton');
button.addEventListener('click', function() {
  console.log('Button clicked');
});

// Event delegation
document.querySelector('#parentElement').addEventListener('click', function(e) {
  if (e.target.matches('.child-class')) {
    console.log('Child element clicked');
  }
});

// Common events
element.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
```

## 7. Asynchronous JavaScript

### Promises
```javascript
// Creating a promise
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = { id: 1, name: 'John' };
    resolve(data);
  }, 1000);
});

// Consuming promises
fetchData
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Chaining promises
fetchData
  .then(data => {
    console.log(data);
    return fetchMoreData(data);
  })
  .then(moreData => console.log(moreData))
  .catch(error => console.error(error));
```

### Async/Await
```javascript
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
```

### Fetch API
```javascript
// GET Request
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data));

// POST Request
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'John', age: 30 })
});
```

## 8. Advanced JavaScript Concepts

### Error Handling
```javascript
// Custom Error
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Debugging
console.trace(); // Print stack trace
debugger; // Pause execution in dev tools
```

### Timers
```javascript
// Delayed execution
const timeoutId = setTimeout(() => {
  console.log('Delayed message');
}, 2000);

// Repeated execution
const intervalId = setInterval(() => {
  console.log('Repeated message');
}, 1000);

// Clearing timers
clearTimeout(timeoutId);
clearInterval(intervalId);
```

### Strict Mode
```javascript
'use strict';

// Prevents accidental global variables
undeclaredVar = 10; // Throws an error in strict mode
```

### Object-Oriented Programming
```javascript
// Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

// Inheritance
class Employee extends Person {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
}
```

## 9. Miscellaneous

### Null vs. Undefined
```javascript
let x;          // undefined
let y = null;   // null

// Difference
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"
```

### User Interaction
```javascript
// Simple alerts and prompts
alert('Warning message');

const name = prompt('Enter your name');
const confirmed = confirm('Are you sure?');
```

### Best Practices
- Use meaningful variable and function names
- Keep functions small and focused
- Avoid global variables
- Use const by default, let when needed
- Handle errors gracefully
- Write modular, reusable code
- Use modern ES6+ syntax
- Leverage functional programming concepts
- Minimize side effects
- Use strict mode