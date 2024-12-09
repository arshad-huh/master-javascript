### Null vs. Undefined
```javascript
let x;          // undefined
let y = null;   // null

// Difference
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"
```

### User Interaction
```javascript
// Simple alerts and prompts
alert('Warning message');

const name = prompt('Enter your name');
const confirmed = confirm('Are you sure?');
```

### Best Practices
- Use meaningful variable and function names
- Keep functions small and focused
- Avoid global variables
- Use const by default, let when needed
- Handle errors gracefully
- Write modular, reusable code
- Use modern ES6+ syntax
- Leverage functional programming concepts
- Minimize side effects
- Use strict mode
## why 0.1 + 0.2 != 0.3 in js but, 0.30000000004