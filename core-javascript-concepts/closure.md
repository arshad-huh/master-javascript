## Closure
- Function that remembers its lexical scope
```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  }
}

let increment = outer();
console.log(increment()); // 1
console.log(increment()); // 2
```