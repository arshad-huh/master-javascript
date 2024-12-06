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