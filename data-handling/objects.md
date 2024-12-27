# Objects
Objects are a fundamental data type that allows you to represent collections of key-value pairs.

## Structure
- **Keys:** Unique identifiers (usually strings) that act as labels for the values.
- **Values:** Can hold any data type, including:
  - Primitives (numbers, strings, booleans, null, undefined)
  - Other objects
  - Arrays
  - Functions

## Creation
- **Object Literal**
```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York"
};
```
- **Constructor**
```javascript
const car = new Object(); 
car.brand = "Ford";
car.model = "Mustang";
car.year = 1969;
```

## Accessing Properties:
- **Dot Notation:** object.property (e.g., person.firstName)
- **Bracket Notation:** object["property"] (useful for dynamic keys)

## Adding/Modifying Properties:
- object.newProperty = value;
- object["newProperty"] = value;

## Deleting Properties:
- delete object.property;

## Methods
Objects can contain functions as properties. These are called methods.
```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() { 
        return this.firstName + " " + this.lastName; 
    }
};
```
```javascript
  const student = {
    name: "Alice",
    id: 123,
    grades: [90, 85, 92],
    isEnrolled: true,
    getAverage: function() {
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }
};

console.log(student.name); // Output: Alice
console.log(student.grades[1]); // Output: 85
console.log(student.getAverage()); // Output: 89
```

## Note:
- When a function is defined as a property of an object (i.e., a method), `this` within that function refers to the object itself.
- In the global execution context (outside of any object), `this` usually refers to the window object in a browser environment.