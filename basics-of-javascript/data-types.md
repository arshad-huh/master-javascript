## Data Types

#### Primitive Types
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

#### Non-Primitive Types
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