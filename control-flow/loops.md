# Loops
Loops are a fundamental concept in programming that allow you to repeatedly execute a block of code. 

## For Loop
- Initialization: Executed once before the loop starts, often used to declare and initialize a counter variable.
- Condition: Evaluated before each iteration. If true, the loop continues; otherwise, it terminates.
- Increment/Decrement: Executed after each iteration, typically used to update the counter variable.

```javascript
for (start; stop; step) {
  // Code to be executed repeatedly
}
// OR
for (initialization; condition; increment/decrement) {
  // Code to be executed repeatedly
}


for (let i = 0; i < 5; i++) {
  // Repeat code 5 times
}
```

## While Loop
- The condition is evaluated before each iteration. If true, the loop continues; otherwise, it terminates.

```javascript
while (condition) {
  // Repeat while condition is true
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++; // Increment i within the loop
}
```

## Do...While Loop
- The code block is executed at least once
```javascript
do {
  // Code executed at least once
} while (condition);

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

## For...of Loop
- Iterates over the values of an iterable object (e.g., arrays, strings, sets, maps).
  
```javascript
for (variable of iterable) {
  // Code to be executed for each element in the iterable
}

const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
  console.log(number);
}

```
#### Other Ways to do same thing 
```javascript
let fruits = ["apple", "banana", "cherry"];

// For loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// forEach
fruits.forEach(fruit => {
  console.log(fruit);
});
```
| Feature | for Loop | forEach | for...of |
|---|---|---|---|
| Iteration | Index-based | Callback function | Value-based |
| Control | More control (e.g., break, continue) | Limited control | Less control |
| Readability | Can be less readable for simple iterations | More concise for simple iterations | Often considered more readable |
| Flexibility | More flexible for complex scenarios | Limited to array operations | Suitable for iterating over various iterables |

## For...in Loop
- Iterates over the properties (keys) of an object.

```javascript
for (key in object) {
  // Code to be executed for each property in the object
}

const person = { name: "Alice", age: 30 };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

## Break and Continue
- `continue`: skips the current iteration of the loop and moves to the next iteration.
- `break`: exits the entire loop and continues execution after the loop.

**Use Cases:**
- `continue`:
  - Skipping certain values in a loop.
  - Optimizing loop performance by avoiding unnecessary calculations.
- `break`:
  - Exiting a loop when a specific condition is met.
  - Handling error conditions within a loop.