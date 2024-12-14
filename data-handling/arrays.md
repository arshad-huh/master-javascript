# Arrays
- Arrays in JavaScript are used to store a collection of values, which can be of different data types (numbers, strings, objects, etc.).
- They are ordered lists, meaning the elements have a specific index (position) starting from 0.

## It is kind of an OBJECT
- **Behavior**:
  - Arrays possess properties and methods, just like regular JavaScript objects.
  - You can add custom properties to an array, like `myArr.myCustomProperty = "someValue"`.
  - They inherit from the Array.prototype, which provides built-in methods like push(), pop(), map(), filter(), etc.
- **Internal Structure**:
  - Arrays are represented as objects with numbered keys (indices) that correspond to the array's elements.
  

## Creation
### Literal
```javascript
let fruits = ["apple", "banana", "orange"];
```
### Constructor
```javascript
let numbers = new Array(5); // Creates an array with 5 empty slots
let numbers2 = new Array(1, 2, 3);
```


## Accessing and Modifying Elements
```javascript
let firstFruit = fruits[0]; // Accesses the first element ("apple")

fruits[1] = "grape"; // Replaces "banana" with "grape"

let fruitCount = fruits.length; // Returns 3
```


## Array Methods
- push(): Adds an element to the end of the array.
- pop(): Removes the last element from the array and returns it.
- slice(start,end): Creates a shallow copy of a portion of the array.
- unshift(): Adds an element to the beginning of the array and returns length.
- shift(): Removes the first element from the array and returns it.
- splice(start, deleteCount, elements to add 1, 2,...): Adds/removes elements at a specific position and return the removed one.
- concat(): Creates a new array by concatenating existing arrays.
- join(): Joins all elements of an array into a string.
- indexOf(): Returns the index of the first occurrence of a specified value.
- includes(): Checks if an array includes a certain value.
- forEach(func): Executes a provided function once for each array element.
- map(func): Creates a new array by performing an operation on each element.
- filter(func): Creates a new array with elements that pass a test condition.
- reduce(func): Applies a function to accumulate a single value from the array.

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

```

## Iterable
-  An object that can be iterated over. This means you can use a loop (like `for...of` or `for`) to access each element of the array one by one.
  
```javascript
// Iteration methods
fruits.forEach(fruit => console.log(fruit));
let uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());
let longFruits = fruits.filter(fruit => fruit.length > 5);
```

### Why is this important?
- **Ease of use:** Iteration simplifies working with arrays, allowing you to process each element efficiently.
- **Compatibility:** Many built-in functions and higher-order functions (like map(), filter(), forEach()) rely on the iterable nature of arrays.

## Multidimensional Arrays
- Arrays can hold other arrays, creating multidimensional arrays.
  
```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
```