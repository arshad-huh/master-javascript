## Operators

#### Arithmetic Operators
- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `%` Modulus (remainder)
- `**` Exponentiation
- `++` Increment
- `--` Decrement

```javascript
let sum = 5 + 3;       // 8
let difference = 10 - 4; // 6
let product = 3 * 4;    // 12
let quotient = 15 / 3;  // 5
```

#### Unary Operators
- `+` Converts to number
- `-` Negation
- `!` Logical NOT

```javascript
let x = "5";
let y = +x;  // Converts to number
let z = !true; // false
```

#### Comparison Operators
- `==` Loose equality (type coercion)
- `===` Strict equality (no type coercion)
- `!=` Loose inequality
- `!==` Strict inequality
- `>` Greater than
- `<` Less than
- `>=` Greater than or equal to
- `<=` Less than or equal to

```javascript
5 == "5"   // true
5 === "5"  // false
```

#### Logical Operators
- `&&` AND
- `||` OR
- `!` NOT

```javascript
let a = true, b = false;
console.log(a && b);  // false
console.log(a || b);  // true
console.log(!a);      // false
```

#### Assignment Operators
- `=` Simple assignment
- `+=` Add and assign
- `-=` Subtract and assign
- `*=` Multiply and assign
- `/=` Divide and assign

```javascript
let x = 5;
x += 3;  // x is now 8
```

#### BEDMAS Rule (Order of Operations)
1. Brackets
2. Exponents
3. Division and Multiplication (left to right)
4. Addition and Subtraction (left to right)

#### Ternary Operator
- Shorthand for if-else
```javascript
let status = age >= 18 ? "Adult" : "Minor";
```