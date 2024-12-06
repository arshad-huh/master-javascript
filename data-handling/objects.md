## Objects

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