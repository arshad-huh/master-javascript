## Variables

JavaScript provides three ways to declare variables:

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

**Best Practices for Variables:**
- Use `const` by default
- Use `let` only when you know the value will change
- Avoid `var` in modern JavaScript
- Use meaningful, descriptive variable names
- Use camelCase for variable names
- Declare variables close to where they are used