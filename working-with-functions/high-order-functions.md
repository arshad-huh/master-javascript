# Higher-Order Functions
- In JavaScript, high-order functions are functions that:
  - Take other functions as arguments.
  - Return functions as their result.

## Functions as Arguments
- `array.forEach(callback(currentValue, index, array))` :
  - callback: A function to be executed for each element.
  - currentValue: The current element being processed in the array.
  - index: The index of the current element.
  - array: The array1 that forEach() is being2 called upon. 


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

## Functions as Return Values

```javascript
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2); 
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
```

## Key Concepts

- **Callbacks:** Functions passed as arguments to other functions.
- **Closures:** A function has access to the variables of the scope in which it was created, even after that scope has closed. This is crucial for many high-order function implementations.
- **Recursion:** function calls itself repeatedly until a specific condition is met.
``` javascript
function factorial(n) {
  if (n === 0) { 
    return 1; // Base case
  } else {
    return n * factorial(n - 1); // Recursive step
  }
}
```