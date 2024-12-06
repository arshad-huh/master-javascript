#### Currying
```javascript
// Transform function with multiple arguments 
// into a sequence of functions
const curriedAdd = (a) => (b) => (c) => a + b + c;

const result = curriedAdd(1)(2)(3); // 6
```

#### Memoization
```javascript
// Cache function results to improve performance
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
};

const expensiveCalculation = memoize((n) => {
  console.log('Calculating...');
  return n * n;
});
```

#### Function Composition
```javascript
// Combine multiple functions
const compose = (f, g) => (x) => f(g(x));

const double = x => x * 2;
const increment = x => x + 1;

const doubleAndIncrement = compose(increment, double);
console.log(doubleAndIncrement(5)); // 11
```