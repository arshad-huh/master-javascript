# Data Types

## Primitive Types
- Simple: These are the most basic building blocks of data in JavaScript.
- Immutable: Once assigned, their value cannot be changed directly.
- Stored directly in memory: They occupy a specific memory location.
  
1. **Number**
   - Represents numeric values
   - Includes integers and floating-point numbers
   ```javascript
   let age = 25;
   let price = 19.99;
   ```

2. **String**
   - Represents text
   - Can use single or double quotes
   ```javascript
   let name = "John";
   let greeting = 'Hello, world!';
   ```

3. **Boolean**
   - Represents true or false values
   ```javascript
   let isStudent = true;
   let hasJob = false;
   ```

4. **Null**
   - Represents an intentional absence of any object value
   ```javascript
   let empty = null;
   ```

5. **Undefined**
   - Represents a variable that has been declared but not assigned a value
   ```javascript
   let undefinedVar;
   ```

6. **Symbol** (ES6)
   - Unique identifier
   ```javascript
   let sym1 = Symbol('description');
   ```

7. **BigInt**
   - For very large integers
   ```javascript
   let bigNumber = 1234567890123456789012345678901234567890n;
   ```

## Non-Primitive Types
- Complex: These are more intricate data structures.
- Mutable: Their properties and values can be modified after creation.
- Stored as references: They are stored as references to their memory location. (the allocated memory space stores a reference (or pointer) to the actual location in memory where the object's data is stored.)
- Have properties and methods associated with them.

1. **Object**
   - Collection of key-value pairs
   ```javascript
   let person = {
     name: "Alice",
     age: 30,
     city: "New York"
   };
   ```

2. **Array**
   - Ordered list of values
   ```javascript
   let fruits = ["apple", "banana", "cherry"];
   ```

3. **Function**
   - Reusable block of code
   ```javascript
   function greet(name) {
     return `Hello, ${name}!`;
   }
   ```
4. **Date**
- Represents a specific point in time
   ```javascript
      const today = new Date(); // Creates a Date object representing the current date and time

      console.log(today); // Output: (e.g., 2024-12-08T18:30:00.000Z)

      const birthday = new Date('1990-01-15'); 

      console.log(birthday.getFullYear()); // Output: 1990 
      console.log(birthday.getMonth() + 1); // Output: 1 (January is 0-indexed)
   ```

5. **RegExp**
- Represents a regular expression for pattern matching
   ```javascript
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      const email1 = "valid@example.com";
      const email2 = "invalid";

      console.log(emailRegex.test(email1)); // Output: true
      console.log(emailRegex.test(email2)); // Output: false
   ```

## NOTE
- `Date` and `RegExp` are considered non-primitive because they have their own internal structures and methods.
  - They are not standard objects in the sense that you cannot directly add or modify their properties like regular objects.
- While `const` prevents you from reassigning the entire object to a different object, it doesn't prevent you from modifying the object's properties.
- For stricter immutability, you can use `Object.freeze()` to make an object truly immutable, preventing any modifications to its properties.
- `null` is a primitive data type in JavaScript, but the reason `typeof null` returns `"object"` is due to a historical bug in the language.