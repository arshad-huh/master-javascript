## Fetch API
```javascript
// GET Request
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data));

// POST Request
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'John', age: 30 })
});
```