## Strings

#### Template Literals
- Use backticks (`)
- Allow multiline strings
- Support string interpolation

```javascript
let name = "Alice";
let greeting = `Hello, ${name}!
This is a multiline string.`;
```

#### String Methods
```javascript
let str = "  Hello, World!  ";

// Extract substring
str.substring(0, 5);  // "Hello"

// Change case
str.toUpperCase();    // "  HELLO, WORLD!  "
str.toLowerCase();    // "  hello, world!  "

// Split string
str.split(',');       // ["  Hello", " World!  "]

// Remove whitespace
str.trim();           // "Hello, World!"
```