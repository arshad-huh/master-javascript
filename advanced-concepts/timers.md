## Timers
```javascript
// Delayed execution
const timeoutId = setTimeout(() => {
  console.log('Delayed message');
}, 2000);

// Repeated execution
const intervalId = setInterval(() => {
  console.log('Repeated message');
}, 1000);

// Clearing timers
clearTimeout(timeoutId);
clearInterval(intervalId);
```