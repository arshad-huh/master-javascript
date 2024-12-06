## Arrays

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