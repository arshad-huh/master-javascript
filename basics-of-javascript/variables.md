# Variables
- to store data
- to make code reusable
- to make code more flexible
- = --> assignment operator

## Where are they stored?
#### 1. Variable Names:

- Symbol Table: When you declare a variable using var, let, or const, the JavaScript engine creates an entry for that variable in a symbol table (also known as an identifier table).
- Symbol Table's Role: This table stores information about the variable, such as:
  - Identifier: The name you give to the variable (e.g., name, age, pi).
  - Scope: The region of your code where the variable is accessible (global, local, block-scoped).
  - Data Type: The type of data the variable holds (e.g., number, string, boolean, object).
  - Memory Address: A pointer to the memory location where the variable's value is stored.

#### 2. Variable Values:

- Memory Allocation: When you assign a value to a variable, the JavaScript engine allocates a specific region of memory to store that value. The size of this memory region depends on the data type of the value.

## JavaScript provides three ways to declare variables:

#### `var`
- Function-scoped or globally-scoped
- Can be redeclared and updated
- Hoisted to the top of its scope
- **Not recommended in modern JavaScript**

```javascript
var x = 5; // Old way of declaring variables
var x = 10; // Allowed, but not best practice
```

#### `let`
- Block-scoped
- Can be updated but not redeclared in the same scope
- Introduced in ES6
- Preferred for variables that will change

```javascript
let count = 0;
count = 1; // Allowed
// let count = 2; // This would cause an error
```

#### `const`
- Block-scoped
- Cannot be updated or redeclared
- Must be initialized at declaration
- Used for values that shouldn't change

```javascript
const PI = 3.14159;
// PI = 3; // This would cause an error
```

## Best Practices for Variables:
- Use `const` by default
- Use `let` only when you know the value will change
- Avoid `var` in modern JavaScript
- Use meaningful, descriptive variable names
- Use camelCase for variable names
- Declare variables close to where they are used