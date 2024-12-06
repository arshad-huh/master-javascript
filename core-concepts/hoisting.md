## Hoisting

#### Variable Hoisting
```javascript
console.log(x); // undefined, not an error
var x = 5;
```

#### Function Hoisting
```javascript
// Function declaration is fully hoisted
sayHello(); // Works!

function sayHello() {
  console.log("Hello");
}
```