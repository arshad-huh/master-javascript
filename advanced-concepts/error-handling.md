## Error Handling
```javascript
// Custom Error
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Debugging
console.trace(); // Print stack trace
debugger; // Pause execution in dev tools
```