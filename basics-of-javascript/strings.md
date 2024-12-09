# Strings
A string is a sequence of characters enclosed within either single quotes (') or double quotes (").

- Strings are immutable in JavaScript. This means you cannot directly modify the characters within a string.
- String methods create new strings instead of modifying the original string.

## Escape Characters
- `\` Backslash => to escape special characters within a string.
- `\n` to include a new line.
- `\t` to insert a horizontal tab space.

## String Methods
- length: Returns the length of the string.
- toUpperCase(): Converts the string to uppercase.
- toLowerCase(): Converts the string to lowercase.   
- concat(str2) or `+`: Concatenates two or more strings.
- slice(start, end): Extracts a portion of the string.
  - start => is the inclusive starting index.
  - end => is the exclusive ending index.
- substring(): Extracts a portion of the string.
  - same as slice(), but handles negative indices differently.
- substr(start, length): Extracts a portion of the string.
- indexOf(): Finds the first index of a substring within the string.
- lastIndexOf(): Finds the last index of a substring within the string.
- replace(): Replaces occurrences of a specified substring with another string.
- split(sep): Splits a string into an array of substrings.
- trim(): Removes whitespace from both ends of the string.
- charAt(): Returns the character at a specific index.
- charCodeAt(): Returns the Unicode value of the character at a specific index.
- includes(): Checks if a string contains a specified substring.
- startsWith(): Checks if a string starts with a specified substring.
- endsWith(): Checks if a string ends with a specified substring.   

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

## Template Literals
- Also called String interpolation, provides a cleaner and more concise way to embed variables or expressions within strings.
- Enclosed within backticks (` `)
- **Allow multiline strings**
- Can embed expressions by enclosing them in curly braces (${}).
- Eliminates the need for string concatenation
- Can create dynamic and readable strings

```javascript
let name = "Alice";
let greeting = `Hello, ${name}!
This is a multiline string.`;
```