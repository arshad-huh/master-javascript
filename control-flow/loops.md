## Loops

#### For Loop
```javascript
for (let i = 0; i < 5; i++) {
  // Repeat code 5 times
}
```

#### While Loop
```javascript
while (condition) {
  // Repeat while condition is true
}
```

#### Do...While Loop
```javascript
do {
  // Code executed at least once
} while (condition);
```

#### Iterating Arrays
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