## Higher-Order Functions
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