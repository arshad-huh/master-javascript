## Event Handling
```javascript
// Adding event listeners
let button = document.querySelector('#myButton');
button.addEventListener('click', function() {
  console.log('Button clicked');
});

// Event delegation
document.querySelector('#parentElement').addEventListener('click', function(e) {
  if (e.target.matches('.child-class')) {
    console.log('Child element clicked');
  }
});

// Common events
element.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
```
